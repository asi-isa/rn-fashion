import { useRef } from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";

import { Constants } from "@/constants";

import { Slide, SLIDE_HEIGHT, SlideProps } from "./slide";
import { FooterSlide, FooterSlideProps } from "./footer-slide";

type FullSlide = SlideProps & Omit<FooterSlideProps, "onPress">;

const RADIUS = 75;

const slides: FullSlide[] = [
  {
    title: "Relaxed",
    alignment: "left",
    color: "#BFEAF5",
    footerTitle: "Find Your Outfit",
    footerDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptas nemo?",
  },
  {
    title: "Playful",
    alignment: "right",
    color: "#BEECC4",
    footerTitle: "Hear it First, Wear it Firs",
    footerDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptas nemo?",
  },
  {
    title: "Excentric",
    alignment: "left",
    color: "#FFE4D9",
    footerTitle: "Your Style, Your Way",
    footerDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptas nemo?",
  },
  {
    title: "Funky",
    alignment: "right",
    color: "#907AD6",
    footerTitle: "Look Good, Feel Good",
    footerDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptas nemo?",
  },
];

export const OnboardingScreen = () => {
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

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
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

      <View style={styles.footer}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor,
          }}
        />
        <Animated.View
          style={[
            styles.footerContent,
            { width: Constants.WINDOW_WIDTH * slides.length },
            { transform: [{ translateX: footerTranslateX }] },
          ]}
        >
          {slides.map((slide, index) => (
            <FooterSlide
              key={index}
              {...slide}
              onPress={() => {
                if (scrollRef.current) {
                  scrollRef.current.scrollTo({
                    x: (index + 1) * Constants.WINDOW_WIDTH,
                    animated: true,
                  });
                }
              }}
              lastSlide={index === slides.length - 1}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    borderTopLeftRadius: RADIUS,
  },
});
