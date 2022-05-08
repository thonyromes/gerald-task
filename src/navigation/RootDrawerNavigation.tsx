import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import type { RootDrawerParamList } from './types';
import { StartTabNavigation } from './StartTabNavigation';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const RootDrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
        },
      }}
    >
      <Drawer.Screen name="Start" component={StartTabNavigation} />
    </Drawer.Navigator>
  );
};

export { RootDrawerNavigation };
