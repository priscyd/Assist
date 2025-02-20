import { Text, View } from "react-native";
import React from "react";
import { CustomText } from "./texts";
import Ionicons from "@expo/vector-icons/Ionicons";

export const TodoCard = () => {
  return (
    <View className="w-full h-fit rounded-2xl p-5 bg-gray-700/20 shadow-slate-600 shadow">
      <View className="flex flex-row items-center gap-1">
        <Ionicons name="checkmark-circle" size={16} color="black" />
        <CustomText className="text-gray-900 text-sm font-semibold  ">
          Blurry Background
        </CustomText>
      </View>
    </View>
  );
};
