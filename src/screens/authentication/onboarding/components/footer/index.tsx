import { View, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

import { Constants } from "@/constants";
import { Dot } from "./dot";
import { FooterSlide } from "./footer-slide";
import { FullSlide, OnboardingAnimation } from "../../types";

interface FooterProps {
  slides: FullSlide[];
  scrollRef: OnboardingAnimation["scrollRef"];
  scrollX: OnboardingAnimation["scrollX"];
  backgroundColor: OnboardingAnimation["backgroundColor"];
  footerTranslateX: OnboardingAnimation["footerTranslateX"];
  radius: number;
}

export const Footer = ({
  slides,
  scrollRef,
  scrollX,
  backgroundColor,
  footerTranslateX,
  radius,
}: FooterProps) => {
  return (
    <View style={styles.footer}>
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor,
        }}
      />

      <View style={[styles.footerContent, { borderTopLeftRadius: radius }]}>
        <View style={[styles.pagination, { height: radius }]}>
          {slides.map((_, index) => (
            <Dot key={index} index={index} scrollX={scrollX} />
          ))}
        </View>

        <Animated.View
          style={{
            flex: 1,
            flexDirection: "row",
            width: Constants.WINDOW_WIDTH * slides.length,
            transform: [{ translateX: footerTranslateX }],
          }}
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
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "white",
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    width: Constants.WINDOW_WIDTH,
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "black",
  },
});
