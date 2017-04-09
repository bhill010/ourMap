import React, { Component } from 'react';
import { Text, View, Image, TextInput, StyleSheet, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Database from '../../firebase/database.js';

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
    // console.log(this.state)

    navigator.geolocation.getCurrentPosition (
        (position) => {
          let latitude = position.coords.latitude;
          let longitude = position.coords.longitude;
          let coordinates = {latitude, longitude};
          Database.setPhotoInformation(this.state.photoUrl, latitude, longitude, this.state.comment);
        }
    );

    // Actions.pop();
    Actions.pop({popNum: 2});
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
