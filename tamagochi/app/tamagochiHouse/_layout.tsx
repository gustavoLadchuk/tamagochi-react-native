import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function HouseLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="sala"
        options={{
          title: 'Sala',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'tv' : 'tv-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cozinha"
        options={{
          title: 'Cozinha',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'fast-food' : 'fast-food-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="quarto"
        options={{
          title: 'Quarto',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'bed' : 'bed-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="jogos"
        options={{
          title: 'Jogos',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'game-controller' : 'game-controller-outline'} color={color} />
          ),
        }}
      />
    </Tabs>

  );
}
