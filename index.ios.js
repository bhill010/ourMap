<<<<<<< HEAD
import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Map from './lib/components/map';

import MapView from 'react-native-maps';

const App = () => {
  return (
    <Map />
);};


// Renders component to the device. Only the root component needs to be registered
=======
import { AppRegistry } from 'react-native';
import App from './lib/app';

>>>>>>> 2a16030172a2d49426d57e70607371ed849cad41
AppRegistry.registerComponent('ourMap', () => App);
