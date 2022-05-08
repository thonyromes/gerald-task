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
};

export type RootDrawerScreenProps<T extends keyof RootDrawerParamList> =
  DrawerScreenProps<RootDrawerParamList, T>;

export type StartTabScreenProps<T extends keyof StartTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<StartTabParamList, T>,
    RootDrawerScreenProps<keyof RootDrawerParamList>
  >;

export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  StackScreenProps<HomeStackParamList, T>;

export type ContactStackScreenProps<T extends keyof ContactStackParamList> =
  StackScreenProps<ContactStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootDrawerParamList {}
  }
}
