import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, logoutUser } from '../actions';
import { Container, ContainerItem, Input, Button, Spinner } from './templates';

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
        <Button onPress={this.onLogOutButtonPress.bind(this)}>
          Sign Out
        </Button>
      );
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Sign In/Sign Up
      </Button>
    );
  }

  render() {
    return (
      <Container>
        <ContainerItem>
          <Input
          label="Email"
          placeholder="email@gmail.com"
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email}
          />
        </ContainerItem>

        <ContainerItem>
          <Input
          secureTextEntry
          label="Password"
          placeholder="password"
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
          />
        </ContainerItem>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <ContainerItem>
          {this.renderButton()}
        </ContainerItem>
      </Container>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
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
