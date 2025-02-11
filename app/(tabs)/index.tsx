import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function HomeScreen() {
  return (
    <SafeAreaView className=" flex px-2 items-center justify-center bg-rose-500">
      <Text style={{ fontFamily: "Outfit_400Regular" }}>Inter Black</Text>
    </SafeAreaView>
  );
}

