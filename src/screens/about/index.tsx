import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export const AboutScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>About</Text>
      <Button title="Home" onPress={() => navigation.goBack()} />
    </View>
  );
};
