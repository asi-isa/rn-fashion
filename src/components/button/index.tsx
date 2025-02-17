import { useTheme } from "@shopify/restyle";
import { View, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { Theme } from "@/theme";

import { Text } from "@/components/text";

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
  const theme = useTheme<Theme>();
  const backgroundColor =
    variant === "primary" ? theme.colors.accent : theme.colors.foreground05;
  const color = variant === "primary" ? "background" : "foreground";
  return (
    <RectButton
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor, borderColor: backgroundColor },
      ]}
    >
      <View accessible accessibilityRole="button">
        <Text variant="label" color={color}>
          {label}
        </Text>
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
});
