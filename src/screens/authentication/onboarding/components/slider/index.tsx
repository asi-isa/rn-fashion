import React from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

import { Constants } from "@/constants";

import { FullSlide, OnboardingAnimation } from "../../types";
import { Slide, SLIDE_HEIGHT } from "./slide";

interface SliderProps {
  slides: FullSlide[];
  scrollRef: OnboardingAnimation["scrollRef"];
  onScroll: OnboardingAnimation["onScroll"];
  backgroundColor: OnboardingAnimation["backgroundColor"];
  radius: number;
}

export const Slider = ({
  slides,
  scrollRef,
  onScroll,
  backgroundColor,
  radius,
}: SliderProps) => {
  return (
    <Animated.View
      style={[
        styles.slider,
        { backgroundColor, borderBottomRightRadius: radius },
      ]}
    >
      <Animated.ScrollView
        ref={scrollRef}
        horizontal
        snapToInterval={Constants.WINDOW_WIDTH}
        snapToAlignment="start"
        decelerationRate="fast"
        disableIntervalMomentum
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={onScroll}
        scrollEventThrottle={1000 / 60}
      >
        {slides.map((slide, index) => (
          <Slide key={index} {...slide} />
        ))}
      </Animated.ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  slider: {
    height: SLIDE_HEIGHT,
  },
});
