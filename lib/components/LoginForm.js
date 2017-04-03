import React, { Component } from 'react';
import { Button, Container, ContainerItem, Input } from './templates';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  onButtonPress() {
    const { email, password } = this.state;
    debugger;
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

        <ContainerItem>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log In
          </Button>
        </ContainerItem>
      </Container>
    );
  }
}

export default LoginForm;
