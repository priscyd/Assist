import { View } from "react-native";
import React from "react";
import { CustomText } from "./texts";
import Ionicons from "@expo/vector-icons/Ionicons";

const Cards = () => {
  return (
    <View className="w-80 h-40 rounded-2xl overflow-hidden p-5  bg-gray-900/20">
      <Ionicons name="checkmark-circle" size={16} color="red" />
      <CustomText className="text-gray-900/10 text-lg font-semibold">
        Blurry Background
      </CustomText>
    </View>
  );
};

export default Cards;
