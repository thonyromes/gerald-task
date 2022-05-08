import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import type { RootDrawerParamList, RootDrawerScreenProps } from './types';
import { StartTabNavigation } from './StartTabNavigation';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const RootDrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Start">
      <Drawer.Screen name="Start" component={StartTabNavigation} />
    </Drawer.Navigator>
  );
};

export { RootDrawerNavigation };
