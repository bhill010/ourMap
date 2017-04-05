import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';
import { Container, ContainerItem, Input, Button } from './templates';

class LoginForm extends Component {
  onEmailChange(text) {
    // wiring up the action creator to mapStateToProps automatically provides
  // it as a prop that we can access
  this.props.emailChanged(text);
  }

  render() {
    return (
      <Container>
        <ContainerItem>
          <Input
          label="Email"
          placeholder="email@gmail.com"
          onChangeText={this.onEmailChange.bind(this)}
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

const mapStateToProps = state => {
  return {
    email: state.auth.email
  };
};

export default connect(mapStateToProps, {emailChanged})(LoginForm);
// emailChanged is the action creator we want to bind to our component,
// which can be put into the second argument of the connect function
