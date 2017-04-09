import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, logoutUser } from '../actions';
import { Container, ContainerItem, Input, Button, Spinner, Header } from './templates';

class LoginForm extends Component {
  onEmailChange(text) {
    // wiring up the action creator to mapStateToProps automatically provides
  // it as a prop that we can access
  this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  onLogOutButtonPress() {
    this.props.logoutUser();
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    } else if (this.props.user) {
      return (
        <TouchableOpacity onPress={this.onLogOutButtonPress.bind(this)}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity
        onPress={this.onButtonPress.bind(this)}>
        <Text style={styles.buttonText}>Sign In/Sign Up</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.layout}>

        <Image
          style={styles.background}
          source={require('../assets/background.jpg')}
        />

      <View style={styles.container}>

        <View style={styles.signup}>
          <View style={styles.email}>
            <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
            />
          </View>

          <View style={styles.password}>
            <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
            />
        </View>

          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>

          <View style={styles.button}>
            {this.renderButton()}
          </View>

        </View>


      </View>

    </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'white',
    backgroundColor: 'red'
  },

  layout:{
    width: '100%',
    height: '100%',
  },

  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },

  signup:{
    justifyContent:'center',
    alignItems: 'center',
    height: 300,
    // backgroundColor: 'red'
  },

  email: {
    justifyContent: 'center',
    width: '90%',
    height: 50,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(0, 122, 255, 1)',
    backgroundColor: 'rgba(255, 255, 255, 0.7)'
  },

  password: {
    width: '90%',
    marginTop: 10,
    height: 50,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(0, 122, 255, 1)',
    backgroundColor: 'rgba(255, 255, 255, 0.7)'
  },

  button: {
    width: '70%',
    height: 45,
    marginTop: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(128, 128, 128, 1)',
    backgroundColor: 'rgba(235, 156, 31, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 18,
    color: 'white'
  }

};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading, user } = auth;

  return {
    email,
    password,
    error,
    loading,
    user
  };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser, logoutUser
})(LoginForm);
// emailChanged is the action creator we want to bind to our component,
// which can be put into the second argument of the connect function
