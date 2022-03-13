import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>App</Text>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});
