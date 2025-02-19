import { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextInput as RNTextInput } from "react-native";

import { Box } from "@/components/box";
import { Container } from "@/components/container";
import { Text } from "@/components/text";
import { Button } from "@/components/button";

import { Footer } from "./components/footer/";
import { TextInput } from "./components/form/text-input";
import { Checkbox } from "./components/form/checkbox";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  rememberMe: Yup.boolean().default(true),
});

const initialValues = loginSchema.getDefault();

export const LoginScreen = () => {
  const passwordRef = useRef<RNTextInput>(null);
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

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
              touched={formik.touched.email}
              onChangeText={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
              error={formik.errors.email}
              autoComplete="email"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current?.focus()}
            />

            <TextInput
              ref={passwordRef}
              icon="lock"
              placeholder="Enter your password"
              touched={formik.touched.password}
              onChangeText={formik.handleChange("password")}
              onBlur={formik.handleBlur("password")}
              error={formik.errors.password}
              autoComplete="current-password"
              returnKeyType="done"
              onSubmitEditing={() => formik.handleSubmit()}
              secureTextEntry
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
              checked={formik.values.rememberMe}
              onChange={() =>
                formik.setFieldValue("rememberMe", !formik.values.rememberMe)
              }
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
            onPress={formik.handleSubmit}
            variant="primary"
          />
        </Box>
      </Container>
    </Box>
  );
};
