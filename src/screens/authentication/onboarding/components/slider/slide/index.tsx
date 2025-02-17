import { View, Text, StyleSheet } from "react-native";

import { Constants } from "@/constants";

export interface SlideProps {
  title: string;
  alignment: "left" | "right";
  color: string;
}

export const SLIDE_HEIGHT = 0.61 * Constants.WINDOW_HEIGHT;
const TITLE_HEIGHT = 100;

export const Slide = ({ title, alignment = "left" }: SlideProps) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - TITLE_HEIGHT) / 2 },
    {
      translateX:
        alignment === "right"
          ? Constants.WINDOW_WIDTH / 2 - TITLE_HEIGHT / 2
          : -Constants.WINDOW_WIDTH / 2 + TITLE_HEIGHT / 2,
    },
    {
      rotate: alignment === "right" ? "-90deg" : "90deg",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, { transform }]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Constants.WINDOW_WIDTH,
  },
  titleContainer: {
    height: 100,
    justifyContent: "center",
  },
  title: {
    fontFamily: "Montserrat",
    fontSize: 80,
    lineHeight: 80,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
});
