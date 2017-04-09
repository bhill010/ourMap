import React from 'react';
import { View } from 'react-native';

const PhotoItem = (props) => {
  return (
    <View style={styles.containerStyle}>
      { props.children }
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { PhotoItem };
