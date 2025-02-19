import React from "react";
import { View, StyleSheet } from "react-native";
import { Slider } from "./components/slider";
import { Footer } from "./components/footer";
import { useOnboardingAnimation } from "./hooks/useOnboardingAnimation";
import { slides } from "./data";
import { useTheme } from "@/theme";

export const OnboardingScreen = () => {
  const theme = useTheme();
  const { scrollRef, scrollX, onScroll, backgroundColor, footerTranslateX } =
    useOnboardingAnimation(slides);

  return (
    <View style={styles.container}>
      <Slider
        slides={slides}
        scrollRef={scrollRef}
        onScroll={onScroll}
        backgroundColor={backgroundColor}
        radius={theme.borderRadii.xxl}
      />
      <Footer
        slides={slides}
        scrollRef={scrollRef}
        scrollX={scrollX}
        backgroundColor={backgroundColor}
        footerTranslateX={footerTranslateX}
        radius={theme.borderRadii.xxl}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
