import { View, Text, StyleSheet } from "react-native";

export const OnboardingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Onboarding</Text>
      <Text style={{ fontFamily: "Montserrat" }}>Onboarding</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
