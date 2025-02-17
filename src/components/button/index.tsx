import { useTheme } from "@shopify/restyle";
import { View, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { Theme } from "@/theme";

import { Text } from "@/components/text";

interface ButtonProps {
  label: string;
  variant: "primary" | "default" | "link";
  onPress: () => void;
}

export const Button = ({
  label,
  variant = "default",
  onPress,
}: ButtonProps) => {
  const theme = useTheme<Theme>();

  let backgroundColor: keyof Theme["colors"];
  let color: keyof Theme["colors"];
  switch (variant) {
    case "primary":
      backgroundColor = "accent";
      color = "background";
      break;

    case "link":
      backgroundColor = "transparent";
      color = "foreground";
      break;

    default:
      backgroundColor = "foreground05";
      color = "foreground";
      break;
  }

  return (
    <RectButton
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: theme.colors[backgroundColor],
          borderColor: theme.colors[backgroundColor],
        },
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
