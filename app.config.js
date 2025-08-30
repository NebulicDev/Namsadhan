export default ({ config }) => ({
  ...config,
  expo: {
    ...config.expo,
    name: "Namsadhan",
    slug: "Namsadhan",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "namsadhan",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      // 👇 Use environment variable instead of local file
      googleServicesFile: process.env.GOOGLE_SERVICES_JSON,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/app-icon.png",
        backgroundColor: "#ffffff",
      },
      edgeToEdgeEnabled: true,
      package: "com.nebulicdev.Namsadhan",
      // 👇 Use environment variable instead of local file
      googleServicesFile: process.env.GOOGLE_SERVICES_JSON,
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
      "expo-asset",
      // Add the Google Sign-In plugin
      "@react-native-google-signin/google-signin",
      [
        "expo-build-properties",
        {
          android: {
            // 👇 also reference env variable here
            googleServicesFile: process.env.GOOGLE_SERVICES_JSON,
          },
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {},
      eas: {
        projectId: "f51cfabd-1164-4cc2-a4a5-97384b80f94e",
      },
    },
  },
});