'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import Camera from 'react-native-camera';
import CryptoJS from 'crypto-js';
import Database from '../firebase/database.js';


class CameraView extends Component {
  constructor(props){
    super(props);

  }

  render() {

    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          captureTarget={Camera.constants.CaptureTarget.disk}
          aspect={Camera.constants.Aspect.fill}>

        <TouchableOpacity style={styles.capture} onPress={this.takePicture.bind(this)}>
          <Image
          style={styles.camera}
          source={require("../assets/camera-2.png")} />
        </TouchableOpacity>

        </Camera>
      </View>
    );
  }


  takePicture() {
    const options = {};

    this.camera.capture({metadata: options})
      .then((data) => this.savePhotoInfo(data.path))
      .catch(err => console.error(err));
  }

  savePhotoInfo(uri) {

		let timestamp = (Date.now() / 1000 | 0).toString();
		let api_key = '146822358129321';
		let api_secret = 'bkQSxoG-g_OJyGHGyh6KOLEQiNI';
		let cloud = 'ourmap';
		let hash_string = 'timestamp=' + timestamp + api_secret;
		let signature = CryptoJS.SHA1(hash_string).toString();
		let upload_url = 'https://api.cloudinary.com/v1_1/' + cloud + '/image/upload';

		let xhr = new XMLHttpRequest();
		xhr.open('POST', upload_url);
		xhr.onload = () => {
      const photoURL = JSON.parse(xhr.response).secure_url;

      Actions.photoForm({photoURL: photoURL, watchId: this.props.watchId});

      // navigator.geolocation.getCurrentPosition (
      //     (position) => {
      //       let latitude = position.coords.latitude;
      //       let longitude = position.coords.longitude;
      //       let coordinates = {latitude, longitude};
      //       Database.setPhotoInformation(photoURL, latitude, longitude);
      //     }
      // );
		};
		let formdata = new FormData();
		formdata.append('file', {uri: uri, type: 'image/png', name: 'upload.png'});
		formdata.append('timestamp', timestamp);
		formdata.append('api_key', api_key);
		formdata.append('signature', signature);
		xhr.send(formdata);
	}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    borderRadius: 5,
    padding: 10,
    margin: 40,
  },
  camera: {
    width: 60,
    height: 60,
    backgroundColor: 'rgba(0, 0, 0, 0)',

  }
});

export default CameraView;
