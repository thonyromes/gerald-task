import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ContactScreen from '../screens/Contact';

import { ContactStackParamList } from './types';

const Stack = createNativeStackNavigator<ContactStackParamList>();

const ContactStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ContactScreen" component={ContactScreen} />
    </Stack.Navigator>
  );
};

export { ContactStackNavigation };
