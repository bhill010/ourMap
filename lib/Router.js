import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Text } from 'react-native';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import MapShow from './components/map/map';

import PhotoIndex from './components/photo/photo_index';
import PhotoForm from './components/photo/photo_form';

import Camera from './components/camera';

// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>Upload</Text>
  );
};

const RouterComponent = () => {
  return (

    <Router sceneStyle={{ paddingTop: 0, flex: 1, height: '100%', width: '100%' }}>

      <Scene key="auth" >
        <Scene sceneStyle={{ paddingTop: 65 }} key="login" component={LoginForm} title="Please Login" />
      </Scene>


      <Scene key="main" sceneStyle={{ paddingTop: 65 }} initial >
        <Scene key="tabbar" tabs={true} hideNavBar tabBarStyle={{ backgroundColor: '#F8F8F8' }} sceneStyle={{ paddingTop: 65 }} >
          <Scene key="upload" title="Upload" icon={TabIcon} onPress={() => Actions.camera()}>
            <Scene key="map" component={MapShow} title="Map" initial tabs={true} tabBarStyle={{ backgroundColor: '#F8F8F8' }} sceneStyle={{ paddingTop: 65 }}>
            </Scene>
            <Scene key="camera" component={Camera} title="Upload Photo" />
            <Scene sceneStyle={{ paddingTop: 65 }} key="photoIndex" component={PhotoIndex} title="Photo" />
            <Scene key="photoForm" component={PhotoForm} title="PhotoForm" />
          </Scene>
        </Scene>
      </Scene>

    </Router>
  );
};

const styles = {
    tabBarStyle: {
        borderTopWidth : .5,
        borderColor    : '#b7b7b7',
        backgroundColor: 'white',
        opacity        : 1
    }
};

// in your render method


export default RouterComponent;
