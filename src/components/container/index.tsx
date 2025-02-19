import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Image } from "expo-image";

import { Box } from "@/components/box";
import { Constants } from "@/constants";
import { useTheme } from "@/theme";

export const patterns = [require("@/../assets/images/patterns/pattern2.jpg")];
const aspectRatio = 753 / 1128;
const width = Constants.WINDOW_WIDTH;
const height = width * aspectRatio;

interface ContainerProps {
  children: React.ReactNode;
  footer: React.ReactNode;
}

export const Container = ({ children, footer }: ContainerProps) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <Box flex={1} backgroundColor="foreground">
      <Box backgroundColor="background">
        <Box borderBottomLeftRadius="xxl" overflow="hidden">
          <Image
            source={patterns[0]}
            style={{ width, height: height * 0.61 }}
          />
        </Box>
      </Box>

      <Box flex={1} overflow="hidden">
        <Image
          source={patterns[0]}
          style={{
            width,
            height,
            borderTopLeftRadius: theme.borderRadii.xxl,
            ...StyleSheet.absoluteFillObject,
            top: -height * 0.61,
          }}
        />

        <Box
          flex={1}
          backgroundColor="background"
          borderRadius="xxl"
          borderTopLeftRadius="none"
          overflow="hidden"
        >
          <KeyboardAwareScrollView>{children}</KeyboardAwareScrollView>
        </Box>
      </Box>

      <Box paddingTop="m" style={{ paddingBottom: insets.bottom }}>
        {footer}
      </Box>
    </Box>
  );
};
