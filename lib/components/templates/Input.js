import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{ label }</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23, // how much space is between each line of text. makes text inside input stand out
    flex: 2 // this is how we proportion space btwn sibling elements, which here are inputStyle and labelStyle
            // 2/3 of space will be allocated to inputStyle
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20, // makes sure label stands apart from left border
    flex: 1 // 1/3 of space will be given to labelStyle
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
