import * as React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

import type { RootDrawerParamList } from './types';
import { StartTabNavigation } from './StartTabNavigation';

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView
      style={{
        paddingHorizontal: 24,
      }}
      {...props}
    >
      <DrawerItem
        label="Beka"
        onPress={undefined}
        style={{
          marginBottom: 24,
        }}
        inactiveTintColor="#fff"
        labelStyle={{
          fontSize: 26,
          textAlign: 'center',
          fontWeight: '600',
        }}
      />
      <DrawerItemList {...props} />
      <DrawerItem
        onPress={undefined}
        label=""
        labelStyle={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          height: 1,
        }}
        style={{
          marginVertical: 40,
        }}
      />
      <DrawerItem
        label="Sign Out"
        onPress={() => {}}
        labelStyle={{
          fontSize: 18,
          color: '#fff',
          paddingHorizontal: 16,
        }}
        style={{
          borderRadius: 16,
        }}
        pressColor="#41241c"
        activeTintColor="#e57a5d"
        activeBackgroundColor="#41241c"
      />
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const RootDrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#191718',
        },
        drawerType: 'back',
        drawerActiveBackgroundColor: '#41241c',
        drawerActiveTintColor: '#e57a5d',
        drawerInactiveTintColor: '#fff',
        drawerLabelStyle: {
          fontSize: 18,
          textTransform: 'capitalize',
        },
        drawerItemStyle: {
          borderRadius: 16,
          paddingHorizontal: 16,
        },
      }}
    >
      <Drawer.Screen
        name="Start"
        component={StartTabNavigation}
        options={{
          title: 'START',
        }}
      />
      <Drawer.Screen
        name="YourCart"
        component={StartTabNavigation}
        options={{
          title: 'YOUR CART',
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={StartTabNavigation}
        options={{
          title: 'FAVORITES',
        }}
      />
      <Drawer.Screen
        name="YourOrders"
        component={StartTabNavigation}
        options={{
          title: 'YOUR ORDERS',
        }}
      />
    </Drawer.Navigator>
  );
};

export { RootDrawerNavigation };
