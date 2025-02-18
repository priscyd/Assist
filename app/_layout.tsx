import { SplashScreen, Stack } from "expo-router";
import { Outfit_400Regular, useFonts } from "@expo-google-fonts/outfit";
import { useEffect } from "react";
import "../global.css"

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Outfit_400Regular,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='screens' />
    </Stack>
  );
}
