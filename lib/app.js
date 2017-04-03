import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/templates';
import LoginForm from './components/LoginForm';

class App extends Component {
  render() {
    return (
      <View>
        <Header headerText="ourMap" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
