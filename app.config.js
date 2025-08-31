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
    splash: {
      image: "./assets/images/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
      googleServicesFile: process.env.GOOGLE_SERVICES_JSON,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/app-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.nebulicdev.Namsadhan",
      googleServicesFile: process.env.GOOGLE_SERVICES_JSON,
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      "expo-asset",
      // Add the Google Sign-In plugin
      "@react-native-google-signin/google-signin",
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: "f51cfabd-1164-4cc2-a4a5-97384b80f94e",
      },
    },
  },
});