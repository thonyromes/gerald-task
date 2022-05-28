import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '@/src/screens/Home';

import { HomeStackParamList } from '@/src/navigation/types';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export { HomeStackNavigation };
