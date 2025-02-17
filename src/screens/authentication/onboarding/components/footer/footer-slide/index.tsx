import { View, Text, StyleSheet } from "react-native";

import { Button } from "@/components/button";

export interface FooterSlideProps {
  footerTitle: string;
  footerDescription: string;
  onPress: () => void;
  lastSlide?: boolean;
}

export const FooterSlide = ({
  footerTitle,
  footerDescription,
  lastSlide = false,
  onPress,
}: FooterSlideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{footerTitle}</Text>
      <Text style={styles.description}>{footerDescription}</Text>
      <Button
        label={lastSlide ? "Let's get started" : "Next"}
        variant={lastSlide ? "primary" : "default"}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 44,
  },
  title: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: "600",
    textAlign: "center",
    fontFamily: "Montserrat",
    color: "#0C0D34",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    fontFamily: "Montserrat",
    color: "#0C0D34",
    marginBottom: 40,
  },
});
