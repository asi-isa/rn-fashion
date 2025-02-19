import { Box } from "@/components/box";
import { Text } from "@/components/text";
import { Button } from "@/components/button";
import { SocialLogin } from "./social-logins";

export const Footer = () => {
  return (
    <Box flexDirection="column" alignItems="center" gap="s">
      <SocialLogin />

      <Button
        label="Sign up"
        variant="link"
        onPress={() => {
          alert("hei there");
        }}
      >
        <Box flexDirection="row" alignItems="center" justifyContent="center">
          <Text variant="label" color="background">
            Don't have an account?{" "}
          </Text>
          <Text variant="label" color="accent">
            Sign up
          </Text>
        </Box>
      </Button>
    </Box>
  );
};
