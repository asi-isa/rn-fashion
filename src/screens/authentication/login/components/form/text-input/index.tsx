import { useState, forwardRef } from "react";
import {
  NativeSyntheticEvent,
  TextInput as RNTextInput,
  TextInputFocusEventData,
  TextStyle,
  TextInputProps as RNTextInputProps,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";

import { useTheme } from "@/theme";
import { Box } from "@/components/box";
import { Text } from "@/components/text";

interface TextInputProps extends RNTextInputProps {
  icon: keyof typeof Feather.glyphMap;
  placeholder: string;
  onChangeText: (text: string) => void;
  onBlur: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  error?: string;
  touched?: boolean;
}

export const TextInput = forwardRef<RNTextInput, TextInputProps>(
  (
    { icon, placeholder, onChangeText, onBlur, error, touched, ...props },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const theme = useTheme();

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (
      event: NativeSyntheticEvent<TextInputFocusEventData>
    ) => {
      setIsFocused(false);
      onBlur(event);
    };

    const reColor =
      touched && error ? "error" : isFocused ? "accent" : "darkGray";
    const color = theme.colors[reColor];

    return (
      <Box flexDirection="column" gap="s">
        <Box
          flexDirection="row"
          gap="s"
          borderWidth={1}
          height={48}
          alignItems="center"
          borderRadius="s"
          paddingHorizontal="m"
          borderColor={reColor}
        >
          <Box>
            <Feather name={icon} size={20} color={color} />
          </Box>

          <RNTextInput
            ref={ref}
            placeholder={placeholder}
            placeholderTextColor={theme.colors.darkGray}
            underlineColorAndroid="transparent"
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{
              fontFamily: theme.textVariants.label.fontFamily,
              fontSize: theme.textVariants.label.fontSize,
              fontWeight: theme.textVariants.label
                .fontWeight as TextStyle["fontWeight"],
              flex: 1,
            }}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={onChangeText}
            {...props}
          />

          <Box
            opacity={touched ? 1 : 0}
            alignItems="center"
            justifyContent="center"
            width={20}
            height={20}
            borderRadius="full"
            flexShrink={0}
            backgroundColor={touched && error ? "error" : "accent"}
          >
            <Feather
              name={error ? "alert-circle" : "check"}
              size={10}
              color="white"
            />
          </Box>
        </Box>

        {touched && error && (
          <Text variant="label" color="error">
            {error}
          </Text>
        )}
      </Box>
    );
  }
);
