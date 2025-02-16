import { View, Text, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

interface ButtonProps {
  label: string;
  variant: "primary" | "default";
  onPress: () => void;
}

export const Button = ({
  label,
  variant = "default",
  onPress,
}: ButtonProps) => {
  const backgroundColor =
    variant === "primary" ? "#2CB9B0" : "rgba(12, 13, 52, 0.05)";
  const color = variant === "primary" ? "white" : "#0C0D34";
  return (
    <RectButton
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor, borderColor: backgroundColor },
      ]}
    >
      <View accessible accessibilityRole="button">
        <Text style={[styles.label, { color }]}>{label}</Text>
      </View>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 24,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});
