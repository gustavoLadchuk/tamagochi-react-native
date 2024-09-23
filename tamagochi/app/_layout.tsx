import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { SafeAreaView } from 'react-native-safe-area-context';
import { SQLiteProvider } from 'expo-sqlite';
import { initDatabase } from '../Database/initDatabase';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
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
    <SQLiteProvider databaseName='tamagochi.db' onInit={initDatabase}>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="createTamagochi" options={{ headerShown: false }} />
          <Stack.Screen name="deleteTamagochi" options={{ headerShown: false }} />
          <Stack.Screen name="tamagochiDetails" options={{ headerShown: false }} />
          <Stack.Screen name="jogos" options={{ headerShown: false }} />
          <Stack.Screen name="Snake" options={{ headerShown: false }} />
          <Stack.Screen name="carStreet" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaView>
    </SQLiteProvider>

  );
}
