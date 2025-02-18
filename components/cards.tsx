import { View } from "react-native";
import React from "react";
import { CustomText } from "./texts";
import Ionicons from "@expo/vector-icons/Ionicons";

export const TodoCard = () => {
  return (
    <View className="w-full h-fit rounded-2xl p-5 bg-gray-900/20">
      <View className="flex-row items-center justify-center">
        <Ionicons name="checkmark-circle" size={16} color="black" />
        <CustomText className="text-gray-900 text-lg font-semibold ml-2">
          Blurry Background
        </CustomText>
      </View>
    </View>
  );
};
