import { View, StyleProp, ViewStyle, TextStyle } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { useTheme } from "@/theme";

import { Text } from "@/components/text";

interface ButtonProps {
  label: string;
  variant: "primary" | "default" | "link";
  onPress: () => void;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const Button = ({
  label,
  variant = "default",
  onPress,
  children,
  style,
  textStyle,
}: ButtonProps) => {
  const theme = useTheme();

  let backgroundColor: keyof typeof theme.colors;
  let color: keyof typeof theme.colors;
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
        {
          padding: variant === "link" ? 0 : 16,
          borderRadius: variant === "link" ? 0 : 24,
          height: variant === "link" ? "auto" : 50,
          width: variant === "link" ? "auto" : 245,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.colors[backgroundColor],
          borderColor: theme.colors[backgroundColor],
        },
        style,
      ]}
      underlayColor={
        variant === "link" ? "transparent" : theme.colors[backgroundColor]
      }
    >
      <View accessible accessibilityRole="button">
        {children ? (
          children
        ) : (
          <Text variant="label" color={color} style={textStyle}>
            {label}
          </Text>
        )}
      </View>
    </RectButton>
  );
};
