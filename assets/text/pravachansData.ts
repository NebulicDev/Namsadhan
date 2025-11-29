// assets/text/pravachansData.ts
import { ImageSourcePropType } from 'react-native';

export interface PravachanTrack {
  id: string;       // Unique ID for the track (can be same as driveId)
  title: string;    // Title of the pravachan
  driveId: string;  // Google Drive ID
  year?: number;    // Optional: Year of the recording
  duration?: string; // Optional: Duration string (e.g., "45:00")
}

export interface SpeakerProfile {
  id: string;       // Unique ID for the speaker (e.g., 'gurudev')
  name: string;     // Display Name
  image: ImageSourcePropType; // Local image path
  tracks: PravachanTrack[];
}

export const PRAVACHANS_DATA: SpeakerProfile[] = [
    {
    id: 'sr',
    name: 'Shri Ramanna Kulkarni',
    image: require('../images/speakers/sr.jpg'),
    tracks: [],
     },
    {
    id: 'gvt',
    name: 'Shri Kakasaheb Tulpule',
    image: require('../images/speakers/gvt.jpg'),
    tracks: [
       // Add tracks here...
    ],
     },
    {
    id: 'DAK',
    name: 'Dr. Anilkumar Kulkarni',
    image: require('../images/speakers/dak.jpeg'),
    tracks: [
      {
        id: 'track_1',
        title: '17 June 2021',
        driveId: '1AWExo1FObm38eZLjWEzGi-n0hxbv1FMh', 
        year: 2021,
      },
      
      {
        id: 'track_2',
        title: '10 August 2021',
        driveId: '1I5A0KeGvhJMAsrwq2Pifzyk56YyowX-J',
        year: 2021,
      },
    ],
  },
  {
    id: 'dsk',
    name: 'Dr. Suhas Kulkarni',
    image: require('../images/speakers/profile.jpeg'),
    tracks: [],
  },
  {
    id: 'vsh',
    name: 'Dr. Vivek Haldavnekar',
    image: require('../images/speakers/vsh.jpeg'),
    tracks: [],
  },
  
];

// Helper to get download URL
export const getDriveDownloadUrl = (driveId: string) => 
  `https://drive.google.com/uc?export=download&id=${driveId}`;