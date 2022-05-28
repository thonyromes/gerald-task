import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import type { StartTabParamList } from '@/src/navigation/types';
import { HomeStackNavigation } from '@/src/navigation/HomeStackNavigation';
import { ContactStackNavigation } from '@/src/navigation/ContactStackNavigation';

const Tab = createBottomTabNavigator<StartTabParamList>();

const StartTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 16,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeStackNavigation} />
      <Tab.Screen name="Contact" component={ContactStackNavigation} />
    </Tab.Navigator>
  );
};

export { StartTabNavigation };
