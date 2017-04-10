// Import libraries for making a component
import React from 'react';
import { Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import FitImage from 'react-native-fit-image';

// Make a component
const Footer = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={styles.viewStyle}>
      <TouchableWithoutFeedback onPress={props.onPress}>
        <FitImage
          style={styles.fitImageWithSize}
          source={props.source}
          />
      </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={props.logoutPress} >
          <View>
            <Text style={styles.textStyle}>Logout</Text>
          </View>
        </TouchableWithoutFeedback>

    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#dfedfc',
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
    fontSize: 15,
    position: 'absolute',
    top: 615,
    left: 320,
    fontFamily: 'Chalkboard SE',

  },
  fitImageWithSize: {
    height: 50,
    width: 50,
    position: 'absolute',
    top: 600,
    left: 166
  },
  logout: {
    height: 50,
    width: 50,
    left: 50,
  }
};

// Make the component available to other parts of the app
export { Footer };
