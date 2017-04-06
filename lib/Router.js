import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import MapShow from './components/map';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="login" component={LoginForm} title="Please Login" />
      <Scene key="map" component={MapShow} title="Map" />
    </Router>
  );
};

export default RouterComponent;
