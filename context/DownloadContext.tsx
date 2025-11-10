// context/DownloadContext.tsx
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from 'expo-file-system';
import * as Notifications from 'expo-notifications'; // Import Notifications
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type DownloadableTrack = {
  id: string;
  url: string;
  title: string; // ADDED: Title is needed for notifications
};

type DownloadProgress = {
  totalBytesWritten: number;
  totalBytesExpectedToWrite: number;
};

type DownloadState = {
  [key: string]: {
    progress: number;
    isDownloading: boolean;
    isCompleted: boolean;
    fileUri?: string;
    downloadResumable?: FileSystem.DownloadResumable;
    lastNotifiedProgress?: number; // ADDED: For throttling notification updates
  };
};

type DownloadContextType = {
  downloadState: DownloadState;
  startDownload: (track: DownloadableTrack) => void;
  getDownloadedFileUri: (trackId: string) => string | undefined;
  deleteDownloadedTrack: (trackId: string) => Promise<void>;
  loadDownloadedTracks: () => Promise<void>;
};

const DownloadContext = createContext<DownloadContextType | undefined>(undefined);

export const useDownload = () => {
  const context = useContext(DownloadContext);
  if (!context) {
    throw new Error('useDownload must be used within a DownloadProvider');
  }
  return context;
};

export const DownloadProvider = ({ children }: { children: ReactNode }) => {
  const [downloadState, setDownloadState] = useState<DownloadState>({});

  useEffect(() => {
    loadDownloadedTracks();
  }, []);

  const loadDownloadedTracks = async () => {
    try {
      const tracks = await AsyncStorage.getItem('downloaded_tracks');
      if (tracks) {
        const parsedTracks = JSON.parse(tracks);
        const initialState: DownloadState = {};
        for (const trackId in parsedTracks) {
          initialState[trackId] = {
            progress: 1,
            isDownloading: false,
            isCompleted: true,
            fileUri: parsedTracks[trackId],
          };
        }
        setDownloadState(initialState);
      }
    } catch (error) {
      console.error('Failed to load downloaded tracks from storage', error);
    }
  };

  const saveDownloadedTrack = async (trackId: string, fileUri: string) => {
    try {
      const tracks = await AsyncStorage.getItem('downloaded_tracks');
      const updatedTracks = tracks ? JSON.parse(tracks) : {};
      updatedTracks[trackId] = fileUri;
      await AsyncStorage.setItem('downloaded_tracks', JSON.stringify(updatedTracks));
    } catch (error) {
      console.error('Failed to save downloaded track to storage', error);
    }
  };

  // This identifier will be used to update or dismiss the notification
  const getNotificationId = (trackId: string) => `download-progress-${trackId}`;

  const startDownload = async (track: DownloadableTrack) => {
    const fileUri = FileSystem.documentDirectory + `${track.id}.mp3`;
    const notificationId = getNotificationId(track.id);

    const downloadResumable = FileSystem.createDownloadResumable(
      track.url,
      fileUri,
      {},
      (downloadProgress: FileSystem.DownloadProgressData) => {
        const progress =
          downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
        const percentage = Math.floor(progress * 100);

        // Update state and throttle notifications
        setDownloadState((prev) => {
          const currentTrackState = prev[track.id];
          const lastNotified = currentTrackState?.lastNotifiedProgress ?? 0;

          // Notify only every 5% or at 100%
          const shouldNotify = percentage - lastNotified >= 5 || percentage === 100;

          if (shouldNotify) {
            Notifications.scheduleNotificationAsync({
              identifier: notificationId,
              content: {
                title: 'Downloading',
                body: track.title,
                subtitle: `${percentage}% Completed`,
                sound: false,
                vibrationPattern: [0],
              },
              trigger: null, // Schedule immediately
            });
          }

          return {
            ...prev,
            [track.id]: {
              ...currentTrackState,
              progress,
              isDownloading: true,
              lastNotifiedProgress: shouldNotify ? percentage : lastNotified,
            },
          };
        });
      }
    );

    // Set initial download state
    setDownloadState((prev) => ({
      ...prev,
      [track.id]: {
        progress: 0,
        isDownloading: true,
        isCompleted: false,
        downloadResumable,
        lastNotifiedProgress: 0,
      },
    }));

    // Schedule the initial "Starting" notification
    await Notifications.scheduleNotificationAsync({
      identifier: notificationId,
      content: {
        title: 'Downloading',
        body: track.title,
        subtitle: '0% Completed',
        sound: false,
        vibrationPattern: [0],
      },
      trigger: null,
    });

    try {
      const result = await downloadResumable.downloadAsync();
      if (result) {
        // Dismiss progress notification
        await Notifications.dismissNotificationAsync(notificationId);

        // Show "Complete" notification
        await Notifications.scheduleNotificationAsync({
          content: {
            title: 'Download Complete',
            body: `${track.title} has been downloaded.`,
            sound: true, // Play sound on completion
          },
          trigger: null,
        });

        setDownloadState((prev) => ({
          ...prev,
          [track.id]: {
            ...prev[track.id],
            progress: 1,
            isDownloading: false,
            isCompleted: true,
            fileUri: result.uri,
          },
        }));
        await saveDownloadedTrack(track.id, result.uri);
      }
    } catch (e) {
      console.error(e);

      // Dismiss progress notification
      await Notifications.dismissNotificationAsync(notificationId);

      // Show "Failed" notification
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'Download Failed',
          body: `Could not download ${track.title}.`,
        },
        trigger: null,
      });

      setDownloadState((prev) => ({
        ...prev,
        [track.id]: {
          ...prev[track.id],
          isDownloading: false,
        },
      }));
    }
  };

  const getDownloadedFileUri = (trackId: string): string | undefined => {
    return downloadState[trackId]?.fileUri;
  };

  const deleteDownloadedTrack = async (trackId: string) => {
    const trackState = downloadState[trackId];
    if (trackState && trackState.fileUri) {
      try {
        // Dismiss any lingering notifications for this track
        await Notifications.dismissNotificationAsync(getNotificationId(trackId));

        await FileSystem.deleteAsync(trackState.fileUri, { idempotent: true });
        const tracks = await AsyncStorage.getItem('downloaded_tracks');
        if (tracks) {
          const parsedTracks = JSON.parse(tracks);
          delete parsedTracks[trackId];
          await AsyncStorage.setItem('downloaded_tracks', JSON.stringify(parsedTracks));
        }
        setDownloadState((prev) => {
          const newState = { ...prev };
          delete newState[trackId];
          return newState;
        });
      } catch (error) {
        console.error('Failed to delete track', error);
      }
    }
  };

  return (
    <DownloadContext.Provider
      value={{
        downloadState,
        startDownload,
        getDownloadedFileUri,
        deleteDownloadedTrack,
        loadDownloadedTracks,
      }}
    >
      {children}
    </DownloadContext.Provider>
  );
};