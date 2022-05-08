import { StatusBar } from 'expo-status-bar';
import React, { VFC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { HomeStackScreenProps } from '../../navigation/types';

const Home = ({ navigation }: HomeStackScreenProps<'HomeScreen'>) => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Home Screen in Home</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
