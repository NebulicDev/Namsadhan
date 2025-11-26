export default {
  "expo": {
    "name": "Namsadhan",
    "slug": "Namsadhan",
    "version": "1.0.3",
    "orientation": "portrait",
    "icon": "./assets/images/splash-icon.png",
    "scheme": "namsadhan",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
    "ios": {
      "supportsTablet": true,
      // ADDED: Re-adding for background downloads
      "infoPlist": {
        "UIBackgroundModes": ["audio", "fetch"]
      }
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/splash-icon.png",
        "backgroundColor": "#fff8f0"
      },
      "edgeToEdgeEnabled": true,
      "package": "com.namsadhan.app",
      // "googleServicesFile": process.env.GOOGLE_SERVICES_JSON,
      "googleServicesFile": "./google-services.json",
      // ADDED: Re-adding for background downloads
      "permissions": ["android.permission.FOREGROUND_SERVICE", "android.permission.WAKE_LOCK"]
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router",
      [
        "expo-navigation-bar",
        {
          "position": "absolute",
          "visibility": "visible",
          "backgroundColor": "#FFFFFF00"
        }
      ],
      [
        "expo-splash-screen",
        {
          "image": "./assets/images/splash-icon.png",
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": "#fff8f0",
        }
      ],
      "expo-asset",
      "@react-native-firebase/app",
      "expo-secure-store",
      [
        "expo-build-properties",
        {
          "android": {
            "enableProguardInReleaseBuilds": true
          }
        }
      ],
      // ADDED: Re-adding for background downloads/audio
      "expo-av",
      // ADDED: This plugin configures native notifications
      // and bundles your custom sound file.
      [
        "expo-notifications",
        {
          "icon": "./assets/images/app-icon.png",
          "color": "#FFFFFF",
          "sounds": [
            "./assets/sounds/meditation_bell.mp3"
          ]
        }
      ]
    ],
    "experiments": {
      "typedRoutes": true
    },
    "extra": {
      "eas": {
        "projectId": "2c224c80-9289-4b6a-8253-d194484d8b0a" //Required for dynamic configs
      }
    }
  }
}