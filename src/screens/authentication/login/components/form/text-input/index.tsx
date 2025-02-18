import { useState } from "react";
import { TextInput as RNTextInput, TextStyle } from "react-native";
import Feather from "@expo/vector-icons/Feather";

import { useTheme } from "@/theme";
import { Box } from "@/components/box";
import { Text } from "@/components/text";

const isNotEmpty = (text: string) => text.length > 0;

interface TextInputProps {
  icon: keyof typeof Feather.glyphMap;
  placeholder: string;
  validator: (value: string) => string | null;
  value: string;
  onChangeText: (text: string) => void;
}

export const TextInput = ({
  icon,
  placeholder,
  validator,
  value,
  onChangeText,
}: TextInputProps) => {
  const theme = useTheme();

  const [error, setError] = useState<string | null>(null);
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
    setError(validator(value));
  };

  const handleChangeText = (text: string) => {
    onChangeText(text);
    error && setError(validator(text));
  };

  const reColor = error ? "error" : isFocused ? "accent" : "darkGray";
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
          placeholder={placeholder}
          placeholderTextColor={theme.colors.darkGray}
          underlineColorAndroid="transparent"
          onFocus={onFocus}
          onBlur={onBlur}
          style={{
            fontFamily: theme.textVariants.label.fontFamily,
            fontSize: theme.textVariants.label.fontSize,
            fontWeight: theme.textVariants.label
              .fontWeight as TextStyle["fontWeight"],
            flex: 1,
          }}
          value={value}
          onChangeText={handleChangeText}
        />

        <Box
          opacity={isNotEmpty(value) ? 1 : 0}
          alignItems="center"
          justifyContent="center"
          width={20}
          height={20}
          borderRadius="full"
          flexShrink={0}
          backgroundColor={isNotEmpty(value) && !error ? "accent" : "error"}
        >
          <Feather
            name={error ? "alert-circle" : "check"}
            size={10}
            color="white"
          />
        </Box>
      </Box>

      {error && (
        <Text variant="label" color="error">
          {error}
        </Text>
      )}
    </Box>
  );
};
