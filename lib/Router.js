import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Text } from 'react-native';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import MapShow from './components/map/map';
// import PhotoIndexContainer from './components/photo/photo_container';
import PhotoIndex from './components/photo/photo_index';

import Camera from './components/camera';

// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
};

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65, flex: 1, height: '100%', width: '100%' }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>

      <Scene key="main" initial >

        <Scene key="map" component={MapShow} title="Map" />

        <Scene key="photoIndex" component={PhotoIndexContainer} title="Photo" />
        <Scene onRight={() => Actions.camera()} rightTitle="Upload" key="map" component={MapShow} title="Map" />
        <Scene key="camera" component={Camera} title="Upload Photo" />

        <Scene
          onRight={() => Actions.camera()}
          rightTitle="Upload"
          key="map"
          component={MapShow}
          title="Map" />

      <Scene key="camera" component={Camera} title="Upload Photo" />

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
