import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/templates';
import LoginForm from './components/LoginForm';
import Map from './components/map';

import PhotoURLForm from './components/photo_url_form';

import Geolocation from './components/geolocation';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBoSF8kdHItfu_FymJN7re1WOIzqWqlAVM",
      authDomain: "ourmap-64a0f.firebaseapp.com",
      databaseURL: "https://ourmap-64a0f.firebaseio.com",
      projectId: "ourmap-64a0f",
      storageBucket: "ourmap-64a0f.appspot.com",
      messagingSenderId: "526709350988"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="ourMap" />
        <Geolocation />
      </View>
    );
  }
}

export default App;

// <Header headerText="ourMap" />
// <LoginForm />
// <Map />
