import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/cmps/login';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to MyApp2!</Text>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

