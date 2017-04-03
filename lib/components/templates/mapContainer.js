import React from 'react';
import { View } from 'react-native';

const mapContainer = (props) => {
  return (
    <View style={styles.mapContainerStyle}>
      { props.children }
    </View>
  );
};

const styles = {
  mapContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  }
};

export { mapContainer };
