import { Tabs } from "expo-router";
import React from "react";
import { IconSymbol } from "@/components/ui/IconSymbol";


export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          width: "80%",
          margin: "auto",
          backgroundColor: "tan",
          opacity: 0.5,
          height: 60,
          borderRadius: 30,
          bottom: 40,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          shadowColor: "transparent",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol
              size={28}
              name="square.3.layers.3d.top.filled"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
