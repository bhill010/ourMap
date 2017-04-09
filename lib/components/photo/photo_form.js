import React, { Component } from 'react';
import { Text, View, Image, TextInput, StyleSheet, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Database from '../../firebase/database.js';

class PhotoForm extends Component {
  constructor(props){
    super(props);
    // console.log(this.props)
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
    navigator.geolocation.clearWatch(this.props.watchId);

    navigator.geolocation.getCurrentPosition (
        (position) => {
          let latitude = position.coords.latitude;
          let longitude = position.coords.longitude;
          let coordinates = {latitude, longitude};
          Database.setPhotoInformation(this.state.photoUrl, latitude, longitude, this.state.comment);
        }
    );

    Actions.pop({popNum: 2, refresh: {}});
    // Actions.pop({popNum: 2});
    // Actions.map();
  }

  render(){
    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={this.handleChange.bind(this)}
            value={this.state.comment}
            placeholder={"Comment"} />

          <Image
            style={styles.image}
            source={{uri: this.state.photoUrl}} />

            <Button
              style={styles.button}
              title="Submit"
              onPress={this.handleSubmit.bind(this)}
            />

        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default PhotoForm;


const styles =  StyleSheet.create({
  image: {
    height: "76%",
    width: '100%'
  },

  input: {
    width: '100%',
    marginTop: 65,
    height: 50,
    borderColor: '#007aff',
    borderWidth: 1
  },

  button: {
    height: 20,
    borderWidth: 1,
    borderColor: '#007aff'
  }


});
