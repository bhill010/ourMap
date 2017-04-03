import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Map from './lib/components/map';

import MapView from 'react-native-maps';

const App = () => {
  return (
    <Map />
);};


// Renders component to the device. Only the root component needs to be registered
AppRegistry.registerComponent('ourMap', () => App);
