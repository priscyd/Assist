import { Pressable, SafeAreaView, View } from "react-native";
import React from "react";
import { CustomText } from "@/components/texts";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const InitialScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="h-screen justify-center">
      <View className="p-4 items-center">
        <CustomText className="text-gray-700 text-5xl w-9/12 text-ellipsis text-center">
          Goodmorning  Priscilla!
          <Ionicons name="sunny-sharp" size={34} color="gold" />
        </CustomText>

        <Pressable onPress={() => router.push("/screens")}>
          <CustomText className="text-rose-900 pt-4">Start the day</CustomText>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default InitialScreen;
