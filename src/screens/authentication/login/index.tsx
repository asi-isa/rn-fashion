import { useState } from "react";

import { Box } from "@/components/box";
import { Container } from "@/components/container";
import { Text } from "@/components/text";
import { useTheme } from "@/theme";

import { SocialLogin } from "./components/social-logins";
import { Button } from "@/components/button";
import { TextInput } from "./components/form/text-input";
import { Checkbox } from "./components/form/checkbox";

const Footer = () => {
  const theme = useTheme();

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

const emailValidator = (value: string) => {
  if (!value) {
    return "Email is required";
  }

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(value)) {
    return "Please enter a valid email address";
  }

  return null;
};

const passwordValidator = (value: string) => {
  if (!value) {
    return "Password is required";
  }

  if (value.length < 8) {
    return "Password must be at least 8 characters long";
  }

  return null;
};

export const LoginScreen = () => {
  const [rememberMe, setRememberMe] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box flex={1} backgroundColor="background">
      <Container footer={<Footer />}>
        <Box padding="xl" flexDirection="column" alignItems="center">
          <Text variant="title1" textAlign="center" marginBottom="s">
            Welcome Back
          </Text>
          <Text textAlign="center" marginBottom="xl">
            Use your credentials below and login to your account
          </Text>

          <Box flexDirection="column" gap="m" marginBottom="m" width="100%">
            <TextInput
              icon="mail"
              placeholder="Enter your email"
              validator={emailValidator}
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              icon="lock"
              placeholder="Enter your password"
              validator={passwordValidator}
              value={password}
              onChangeText={setPassword}
            />
          </Box>

          <Box
            flexDirection="row"
            justifyContent="space-between"
            width="100%"
            marginBottom="xl"
          >
            <Checkbox
              label="Remember me"
              checked={rememberMe}
              onChange={setRememberMe}
            />
            <Button
              label="Forgot password?"
              variant="link"
              onPress={() => {
                alert("login");
              }}
            >
              <Text
                variant="label"
                color="accent"
                textDecorationLine="underline"
              >
                Forgot password?
              </Text>
            </Button>
          </Box>

          <Button
            label="Log into your account"
            onPress={() => {}}
            variant="primary"
          />
        </Box>
      </Container>
    </Box>
  );
};
