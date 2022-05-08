import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ContactScreen from '../screens/Home';

import { ContactStackParamList } from './types';

const Stack = createNativeStackNavigator<ContactStackParamList>();

const ContactStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ContactScreen" component={ContactScreen} />
    </Stack.Navigator>
  );
};

export { ContactStackNavigation };
