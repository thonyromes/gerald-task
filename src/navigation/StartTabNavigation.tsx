import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import type { StartTabParamList } from './types';
import { HomeStackNavigation } from './HomeStackNavigation';
import { ContactStackNavigation } from './ContactStackNavigation';

const Tab = createBottomTabNavigator<StartTabParamList>();

const StartTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarIcon: ({ focused }) => null,
      }}
    >
      <Tab.Screen name="Home" component={HomeStackNavigation} />
      <Tab.Screen name="Contact" component={ContactStackNavigation} />
    </Tab.Navigator>
  );
};

export { StartTabNavigation };
