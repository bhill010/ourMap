import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Text } from 'react-native';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import MapShow from './components/map/map';

import PhotoIndex from './components/photo/photo_index';
import PhotoForm from './components/photo/photo_form';

import Camera from './components/camera';
import Firebase from 'firebase';

import { logoutUser } from './actions';
import { connect } from 'react-redux';



// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>Upload</Text>
  );
};


class RouterComponent extends Component {
  constructor(props) {
    super(props);

  }

  onLogOutButtonPress() {
    this.props.logoutUser();
    Actions.auth();
    console.log(this.props.user);
    console.log(this.props.email);
  }


  render() {

    return (

      <Router sceneStyle={{ paddingTop: 0, flex: 1, height: '100%', width: '100%' }}>

        <Scene key="auth" >
          <Scene  sceneStyle={{ paddingTop: 0 }} hideNavBar key="login" component={LoginForm} title="Please Login" />
        </Scene>


        <Scene key="main" rightTitle="Logout" onRight={() => this.onLogOutButtonPress()} sceneStyle={{ paddingTop: 65 }}  >
          <Scene key="map" component={MapShow} title="Map" initial tabs={true} tabBarStyle={{ backgroundColor: '#F8F8F8' }} sceneStyle={{ paddingTop: 65 }} />
          <Scene key="camera" component={Camera} title="Upload Photo" />
          <Scene sceneStyle={{ paddingTop: 65 }} key="photoIndex" component={PhotoIndex} title="Photo" />
          <Scene key="photoForm" component={PhotoForm} title="PhotoForm" />

        </Scene>

      </Router>
    );
  }
}

const styles = {
    tabBarStyle: {
      borderTopWidth : .5,
      borderColor    : '#b7b7b7',
      backgroundColor: 'white',
      opacity        : 1
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
  logoutUser
})(RouterComponent);

// in your render method


// export default RouterComponent;
