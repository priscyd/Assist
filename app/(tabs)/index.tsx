import { View } from "react-native";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-rose-100 h-screen p-2 items-center ">
      <View className=" bg-rose-200 rounded-full border-2 border-rose-400">
        <Text
          style={{ fontFamily: "Outfit_400Regular" }}
          className="px-6 py-2 bg-transparent text-rose-600 "
        >
          Good morning
        </Text>
      </View>
      <View className="flex items-center justify-center h-3/4">
        <Text style={{ fontFamily: "Outfit_400Regular" }} className="text-rose-600 text-lg mb-5 ">
          Morning Awakening
        </Text>
        <View className="p-2 h-28 w-28 bg-rose-900 rounded-lg backdrop-blur-2xl">

        </View>
      </View>
    </SafeAreaView>
  );
}
