import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Home</Text>
      <Button title="About" onPress={() => navigation.navigate("About")} />
    </View>
  );
};
