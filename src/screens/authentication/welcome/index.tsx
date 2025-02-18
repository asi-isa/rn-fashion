import { useNavigation } from "@react-navigation/native";

import { Box } from "@/components/box";
import { Text } from "@/components/text";
import { Button } from "@/components/button";

export const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <Box flex={1} backgroundColor="background">
      <Box
        flex={1}
        borderBottomRightRadius="xxl"
        backgroundColor="lightGray"
      ></Box>

      <Box flex={1} borderTopLeftRadius="xxl">
        <Box
          backgroundColor="lightGray"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />

        <Box
          flex={1}
          backgroundColor="background"
          borderTopLeftRadius="xxl"
          justifyContent="center"
          alignItems="center"
          gap="xl"
        >
          <Box gap="s">
            <Text variant="title1" textAlign="center">
              Let's get started
            </Text>
            <Text variant="body" textAlign="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, sequi aliquam.
            </Text>
          </Box>

          <Box gap="m">
            <Button
              label="Have an account? Log in"
              variant="primary"
              onPress={() => {
                navigation.navigate("Login");
              }}
            />
            <Button
              label="Join us, it's free"
              variant="default"
              onPress={() => {}}
            />
            <Button
              label="Forgot password?"
              variant="link"
              onPress={() => {}}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
