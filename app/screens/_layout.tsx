import React from "react";
import { Stack } from "expo-router";

const ScreenLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Home" }} />
    </Stack>
  );
};

export default ScreenLayout;
