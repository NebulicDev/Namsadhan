// app.config.js

export default {
  "expo": {
    "name": "Namsadhan",
    "slug": "Namsadhan",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "namsadhan",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/app-icon.png",
        "backgroundColor": "#ffffff"
      },
      "edgeToEdgeEnabled": true,
      "package": "com.nebulicdev.Namsadhan",
      "googleServicesFile": process.env.GOOGLE_SERVICES_JSON 
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "image": "./assets/images/splash-icon.png",
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": "#ffffff"
        }
      ],
      "expo-asset",
      "@react-native-firebase/app"
    ],
    "experiments": {
      "typedRoutes": true
    },
    // --- ADD THIS BLOCK ---
    "extra": {
      "eas": {
        "projectId": "f51cfabd-1164-4cc2-a4a5-97384b80f94e"
      }
    }
    // --------------------
  }
}