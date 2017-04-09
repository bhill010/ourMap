import React, { Component } from 'react';
import { Scene, Router, Actions, ActionConst } from 'react-native-router-flux';
import { Text, Image } from 'react-native';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import MapShow from './components/map/map';

import PhotoIndex from './components/photo/photo_index';
import PhotoForm from './components/photo/photo_form';

import Camera from './components/camera';
import Firebase from 'firebase';

import { logoutUser } from './actions';
import { connect } from 'react-redux';

class RouterComponent extends Component {
  constructor(props) {
    super(props);

  }

  onLogOutButtonPress() {
    this.props.logoutUser();
    Actions.auth();
  }


  render() {

    return (

      <Router sceneStyle={{ paddingTop: 0, flex: 1, height: '100%', width: '100%' }}>

          <Scene key="auth" type={ActionConst.RESET} >
            <Scene  sceneStyle={{ paddingTop: 0 }} hideNavBar key="login" component={LoginForm} title="Please Login" type={ActionConst.RESET} />
          </Scene>


          <Scene key="main" rightTitle="Logout" onRight={() => this.onLogOutButtonPress()} rightButtonTextStyle={styles.rightButtonText} sceneStyle={{ paddingTop: 65 }} navigationBarStyle={styles.navBarStyle} titleStyle={styles.navBarTextStyle} initial>
            <Scene key="map" component={MapShow} title="ourMap" initial tabs={true} tabBarStyle={{ backgroundColor: '#F8F8F8' }} sceneStyle={{ paddingTop: 65 }} />
            <Scene key="camera" component={Camera} title="Upload Photo"  />

            <Scene sceneStyle={{ paddingTop: 65 }} key="photoIndex" component={PhotoIndex} title="Photo" >
              <Image
                style={styles.background}
                source={require('./assets/bambooBackground.jpg')}
                />
            </Scene>

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
    },
    navBarStyle: {
      backgroundColor: '#dfedfc',
    },
    navBarTextStyle: {
      fontFamily: 'Chalkboard SE',
      fontSize: 20,
      color: '#e59b23'
    },
    rightButtonText: {
      fontFamily: 'Chalkboard SE',
      fontSize: 15,
      color: 'black',
      marginTop: 5
    },
    photoIndexStyle: {
      paddingTop: 65,
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
