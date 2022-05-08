import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import type { StartTabParamList } from './types';
import { HomeStackNavigation } from './HomeStackNavigation';
import { ContactStackNavigation } from './ContactStackNavigation';

const Tab = createBottomTabNavigator<StartTabParamList>();

const StartTabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackNavigation} />
        <Tab.Screen name="Contact" component={ContactStackNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export { StartTabNavigation };
