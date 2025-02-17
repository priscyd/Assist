import { View, Text } from "react-native";
import React from "react";
import { Outfit_400Regular } from "@expo-google-fonts/outfit";

export const CustomText = ({
  className,
  children,
}: {
  className?: string;
  children: any;
}) => {
  return (
    <Text style={{ fontFamily: "Outfit_400Regular" }} className={className}>
      {children}
    </Text>
  );
};
