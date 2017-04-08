import React, { Component } from 'react';
import { Text, View, Image, TextInput, StyleSheet, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

class PhotoForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      photoUrl: this.props.photoURL,
      comment: ""
    };
  }

  componentWillUnmount(){
    this.setState({
      photoUrl: "",
      comment: ""
    });
  }

  handleChange(comment){
    return this.setState({comment});
  }

  handleSubmit(){
    //dispatch this.state()
    Actions.map();
  }

  render(){
    return(
      <View>
        <Image
          style={styles.image}
          source={{uri: this.state.photoUrl}} />

        <TextInput
          style={styles.input}
          onChangeText={this.handleChange.bind(this)}
          value={this.state.comment}
          placeholder={"Comment"} />

        <Button
          style={styles.button}
          title="Submit"
          onPress={this.handleSubmit.bind(this)}
        />
      </View>
    );
  }
}

export default PhotoForm;


const styles =  StyleSheet.create({
  image: {
    height: "86%",
    width: '100%'
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },

  button: {
    height: 20,
    borderWidth: 1,
    borderColor: '#007aff'
  }


});
