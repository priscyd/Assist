import { View } from "react-native";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className=" f bg-rose-200 h-screen">
      <Text style={{ fontFamily: "Outfit_400Regular" }} className="font">
        Inter Black
      </Text>
      <View>
        <Text style={{ fontFamily: "Outfit_400Regular" }}>Inter Black</Text>
      </View>
    </SafeAreaView>
  );
}
