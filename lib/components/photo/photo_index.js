import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class PhotoIndex extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log(this.props.coordinates);
    // this.props.fetchPhotos();
  }

  render(){
    // console.log(this.props);
    return(
      <View></View>
    );
  }
}
