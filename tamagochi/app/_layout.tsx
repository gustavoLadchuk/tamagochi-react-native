import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="createTamagochi" options={{ headerShown: false }} />
        <Stack.Screen name="deleteTamagochi" options={{ headerShown: false }} />
        <Stack.Screen name="tamagochiHouse" options={{ headerShown: false }} />
        <Stack.Screen name="jogos" options={{ headerShown: false }} />
        <Stack.Screen name="Snake" options={{ headerShown: false }} />
        <Stack.Screen name="carStreet" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  );
}
