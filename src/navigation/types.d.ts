import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { DrawerScreenProps } from '@react-navigation/drawer';

export type HomeStackParamList = {
  HomeScreen: undefined;
};

export type ContactStackParamList = {
  ContactScreen: undefined;
};

export type StartTabParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Contact: NavigatorScreenParams<ContactStackParamList>;
};

export type RootDrawerParamList = {
  Start: NavigatorScreenParams<StartTabParamList>;
  YourCart: NavigatorScreenParams<StartTabParamList>;
  Favorites: NavigatorScreenParams<StartTabParamList>;
  YourOrders: NavigatorScreenParams<StartTabParamList>;
};

export type RootDrawerScreenProps<T extends keyof RootDrawerParamList> =
  DrawerScreenProps<RootDrawerParamList, T>;

export type StartTabScreenProps<T extends keyof StartTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<StartTabParamList, T>,
    RootDrawerScreenProps<keyof RootDrawerParamList>
  >;

export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  CompositeScreenProps<
    StackScreenProps<HomeStackParamList, T>,
    CompositeScreenProps<
      BottomTabScreenProps<StartTabParamList>,
      DrawerScreenProps<RootDrawerParamList>
    >
  >;

export type ContactStackScreenProps<T extends keyof ContactStackParamList> =
  CompositeScreenProps<
    StackScreenProps<ContactStackParamList, T>,
    CompositeScreenProps<
      BottomTabScreenProps<StartTabParamList>,
      DrawerScreenProps<RootDrawerParamList>
    >
  >;
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootDrawerParamList {}
  }
}
