import React from 'react';
import { AppRegistry, View, Text } from 'react-native';

const App = () => (
  <View style={styles.containerStyle}>
    <Text>ourMap</Text>
  </View>
);

const styles = {
  containerStyle: {
    marginTop: 20
  }
};

// Renders component to the device. Only the root component needs to be registered
AppRegistry.registerComponent('ourMap', () => App);
