import { useRef } from "react";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import { Constants } from "@/constants";
import { FullSlide } from "../types";

export const useOnboardingAnimation = (slides: FullSlide[]) => {
  const scrollRef = useRef<Animated.ScrollView>(null);
  const scrollX = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  const backgroundColor = useDerivedValue(() => {
    return interpolateColor(
      scrollX.value,
      slides.map((_, index) => index * Constants.WINDOW_WIDTH),
      slides.map((slide) => slide.color)
    );
  });

  const footerTranslateX = useDerivedValue(() => {
    return interpolate(
      scrollX.value,
      slides.map((_, index) => index * Constants.WINDOW_WIDTH),
      slides.map((_, index) => -index * Constants.WINDOW_WIDTH)
    );
  });

  return {
    scrollRef,
    scrollX,
    onScroll,
    backgroundColor,
    footerTranslateX,
  };
};
