import React, { Component } from 'react';
import { Container, ContainerItem, Input, Button } from './templates';

class LoginForm extends Component {

  render() {
    return (
      <Container>
        <ContainerItem>
          <Input
          label="Email"
          placeholder="email@gmail.com"
          />
        </ContainerItem>

        <ContainerItem>
          <Input
          secureTextEntry
          label="Password"
          placeholder="password"
          />
        </ContainerItem>

        <ContainerItem>
          <Button>
            Login
          </Button>
        </ContainerItem>
      </Container>
    );
  }

}



export default LoginForm;
