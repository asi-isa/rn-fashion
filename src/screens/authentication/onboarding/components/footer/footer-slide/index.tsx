import { View, StyleSheet } from "react-native";

import { Button } from "@/components/button";
import { Text } from "@/components/text";
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
      <Text variant="title2" style={styles.title}>
        {footerTitle}
      </Text>
      <Text variant="body" style={styles.description}>
        {footerDescription}
      </Text>
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
    marginBottom: 12,
  },
  description: {
    textAlign: "center",
    marginBottom: 40,
  },
});
