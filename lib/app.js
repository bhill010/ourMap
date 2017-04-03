import React, { Component } from 'react';
import { View, Text } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text>ourMap</Text>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    marginTop: 20
  }
};

export default App;
