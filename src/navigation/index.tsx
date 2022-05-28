import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { RootDrawerNavigation } from '@/src/navigation/RootDrawerNavigation';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootDrawerNavigation />
    </NavigationContainer>
  );
}
