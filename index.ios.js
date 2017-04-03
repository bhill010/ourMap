import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Map from './lib/components/map';

import MapView from 'react-native-maps';

const App = () => {
  return (
  <View style={styles.containerStyle}>
    <Map />
  </View>
);};

const styles = {
  containerStyle: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },

};

// Renders component to the device. Only the root component needs to be registered
AppRegistry.registerComponent('ourMap', () => App);


// <MapView
//   style={styles.map}
//   initialRegion={{
//     latitude: 37.78825,
//     longitude: -122.4324,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   }}
// >
//   <MapView.Marker
//     coordinate={{
//       latitude: 37.78825,
//       longitude: -122.4324
//     }}>
//
//     <View style={styles.radius}>
//       <View style={styles.marker} />
//     </View>
//
//   </MapView.Marker>
//
// </MapView>
