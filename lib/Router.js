import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import MapShow from './components/map/map';
import PhotoIndexContainer from './components/photo/photo_container';


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65, flex: 1, height: '100%', width: '100%' }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>

      <Scene key="main" initial>
        <Scene key="map" component={MapShow} title="Map" />
        <Scene key="photoIndex" component={PhotoIndexContainer} title="Photo" />

      </Scene>
    </Router>
  );
};

export default RouterComponent;
