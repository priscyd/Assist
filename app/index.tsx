import { Pressable, SafeAreaView, View } from "react-native";
import React from "react";
import { CustomText } from "@/components/texts";
import { useRouter } from "expo-router";

const InitialScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="bg-rose-200 h-screen justify-center items-center p-4">
      <View className=" w-full p-4 backdrop-blur-md bg-rose-300">
        <CustomText className="text-rose-900">Hello, world!</CustomText>
      </View>
      <View className="w-80 h-40 rounded-2xl overflow-hidden p-5  bg-white/20">
        <CustomText className="text-gray-900/10 text-lg font-semibold">
          Blurry Background
        </CustomText>
      </View>
      <CustomText className="">InitialScreen</CustomText>

      <Pressable onPress={() => router.push("/screens")}>
        <CustomText className="text-rose-900">Go to home screen</CustomText>
      </Pressable>
    </SafeAreaView>
  );
};

export default InitialScreen;
