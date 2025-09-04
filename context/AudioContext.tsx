// context/AudioContext.tsx
import { Audio } from 'expo-av';
import React, {
    createContext,
    useContext,
    useEffect,
    useState
} from 'react';

interface AudioContextType {
  sound: Audio.Sound | null;
  isPlaying: boolean;
  currentTrackId: string | null;
  playbackStatus: { position: number; duration: number };
  playSound: (uri: string, trackId: string) => Promise<void>;
  pauseSound: () => Promise<void>;
  seekSound: (position: number) => Promise<void>;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackId, setCurrentTrackId] = useState<string | null>(null);
  const [playbackStatus, setPlaybackStatus] = useState({ position: 0, duration: 0 });

  useEffect(() => {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      playsInSilentModeIOS: true,
      staysActiveInBackground: true,
      shouldDuckAndroid: true,
      playThroughEarpieceAndroid: false,
    });

    return () => {
      sound?.unloadAsync();
    };
  }, [sound]);

  const onPlaybackStatusUpdate = (status: any) => {
    if (status.isLoaded) {
      setPlaybackStatus({
        position: status.positionMillis,
        duration: status.durationMillis,
      });
      if (status.didJustFinish) {
        setIsPlaying(false);
        setCurrentTrackId(null);
      }
    }
  };

  const playSound = async (uri: string, trackId: string) => {
    if (sound && currentTrackId === trackId) {
      if (isPlaying) {
        await sound.pauseAsync();
        setIsPlaying(false);
      } else {
        await sound.playAsync();
        setIsPlaying(true);
      }
      return;
    }

    if (sound) {
      await sound.unloadAsync();
    }

    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri },
      { shouldPlay: true },
      onPlaybackStatusUpdate
    );
    setSound(newSound);
    setCurrentTrackId(trackId);
    setIsPlaying(true);
  };

  const pauseSound = async () => {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };
  
  const seekSound = async (position: number) => {
    if (sound) {
      await sound.setPositionAsync(position);
    }
  };


  return (
    <AudioContext.Provider value={{ sound, isPlaying, currentTrackId, playbackStatus, playSound, pauseSound, seekSound }}>
      {children}
    </AudioContext.Provider>
  );
};