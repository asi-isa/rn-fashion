import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import {
  createStaticNavigation,
  type StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "./src/screens/home";
import { AboutScreen } from "./src/screens/about";
import { OnboardingScreen } from "./src/screens/authentication";

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

  return <Navigation />;
}
