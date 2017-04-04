import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
  //Spinner has built-in size property. By default, with the || statement, it will be large
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={ size || 'large' } />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1, //gives full width of screen
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { Spinner };
