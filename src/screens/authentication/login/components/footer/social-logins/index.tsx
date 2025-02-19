import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import { Box } from "@/components/box";
import { useTheme } from "@shopify/restyle";

export const SocialLogin = () => {
  return (
    <Box>
      <Box flexDirection="row" justifyContent="center" gap="m">
        <SocialLoginButton icon="google" onPress={() => {}} />
        <SocialLoginButton icon="facebook-f" onPress={() => {}} />
        <SocialLoginButton icon="apple" onPress={() => {}} />
      </Box>
    </Box>
  );
};

const SocialLoginButton = ({
  icon,
  onPress,
}: {
  icon: string;
  onPress: () => void;
}) => {
  const theme = useTheme();
  const SIZE = 44;
  return (
    <Box
      backgroundColor="background"
      borderRadius="full"
      width={SIZE}
      height={SIZE}
      alignItems="center"
      justifyContent="center"
    >
      <FontAwesome6 name={icon} size={20} color={theme.colors.foreground} />
    </Box>
  );
};
