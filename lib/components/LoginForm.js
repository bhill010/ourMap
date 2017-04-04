import React, { Component } from 'react';
import { Button, Container, ContainerItem, Input } from './templates';
import firebase from 'firebase';
import { Text } from 'react-native';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', error: '' };
  }

  onButtonPress() {
    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => { //if login attempt fails, then enter the catch-promise case and attempt to create an account for user
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'Authentication Failed.' });
          });
      });
  }

  render() {
    return (
      <Container>
        <ContainerItem>
          <Input
            placeholder="example@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            />
        </ContainerItem>

        <ContainerItem>
          <Input
            secureTextEntry={true}
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </ContainerItem>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <ContainerItem>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log In
          </Button>
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

export default LoginForm;
