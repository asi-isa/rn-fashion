import React from "react";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import {
  createStaticNavigation,
  type StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider } from "@shopify/restyle";

import { theme } from "./src/theme";
import { HomeScreen } from "./src/screens/home";
import { AboutScreen } from "./src/screens/about";
import { OnboardingScreen, WelcomeScreen } from "./src/screens/authentication";

SplashScreen.preventAutoHideAsync();

const RootStack = createNativeStackNavigator({
  initialRouteName: "Onboarding",
  screenOptions: {
    headerShown: false,
  },
  groups: {
    App: {
      screens: {
        Home: HomeScreen,
        About: AboutScreen,
      },
    },
    Authentication: {
      screens: {
        Onboarding: OnboardingScreen,
        Welcome: WelcomeScreen,
      },
    },
  },
});

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  const [loaded, error] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat-VariableFont.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
