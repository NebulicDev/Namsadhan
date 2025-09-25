// context/DownloadContext.tsx
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from 'expo-file-system';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type DownloadableTrack = {
  id: string;
  url: string;
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

  const startDownload = async (track: DownloadableTrack) => {
    const fileUri = FileSystem.documentDirectory + `${track.id}.mp3`;
    const downloadResumable = FileSystem.createDownloadResumable(
      track.url,
      fileUri,
      {},
      (downloadProgress: FileSystem.DownloadProgressData) => {
        const progress =
          downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
        setDownloadState((prev) => ({
          ...prev,
          [track.id]: {
            ...prev[track.id],
            progress,
            isDownloading: true,
          },
        }));
      }
    );

    setDownloadState((prev) => ({
      ...prev,
      [track.id]: {
        progress: 0,
        isDownloading: true,
        isCompleted: false,
        downloadResumable,
      },
    }));

    try {
      const result = await downloadResumable.downloadAsync();
      if (result) {
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