import Animated, {
  interpolate,
  SharedValue,
  useDerivedValue,
} from "react-native-reanimated";

import { Constants } from "@/constants";

interface DotProps {
  index: number;
  scrollX: SharedValue<number>;
}

export const Dot = ({ index, scrollX }: DotProps) => {
  const inputRange = [
    (index - 1) * Constants.WINDOW_WIDTH,
    index * Constants.WINDOW_WIDTH,
    (index + 1) * Constants.WINDOW_WIDTH,
  ];
  const opacity = useDerivedValue(() => {
    return interpolate(scrollX.value, inputRange, [0.5, 1, 0.5], "clamp");
  });
  const scale = useDerivedValue(() => {
    return interpolate(scrollX.value, inputRange, [0.8, 1.1, 0.8], "clamp");
  });

  return (
    <Animated.View
      style={{
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "black",
        opacity,
        transform: [{ scale }],
      }}
    />
  );
};
