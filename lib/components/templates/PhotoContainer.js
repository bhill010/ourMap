import React from 'react';
import { View } from 'react-native';

const PhotoContainer = (props) => {
  return (
    <View style={styles.containerStyle}>
      { props.children }
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2, // rounded corners
    borderColor: '#ddd', // gray color
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 10}, // no shadow on left or right side, but some on border
    shadowOpacity: 0.6, // makes a component or item see-through. this will lighten the shadow
    shadowRadius: 2, // just like border radius. will round out the shadow corners
    elevation: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    backgroundColor: 'white'
  }
};

export { PhotoContainer };
