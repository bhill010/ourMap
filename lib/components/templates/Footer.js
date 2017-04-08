// Import libraries for making a component
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

// Make a component
const Footer = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={textStyle}>{props.footerText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    top: 600,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#b4b1b4',
    borderBottomWidth: 0,
  },
  textStyle: {
    fontSize: 20,
    position: 'absolute',
    top: 615,
    left: 155,
    color: 'red'
  }
};

// Make the component available to other parts of the app
export { Footer };
