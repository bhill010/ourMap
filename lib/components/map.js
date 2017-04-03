import React from "react";
import { View, Text, AppRegistry, StyleSheet } from "react-native";
import MapView from 'react-native-maps';


export default class Map extends React.Component {

  render(){
    return(
      <View style={styles.containerStyle}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >

          <MapView.Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324
            }}>

            <View style={styles.radius}>
              <View style={styles.marker} />
            </View>

          </MapView.Marker>

        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  },

  map: {
    width: '100%',
    height: '90%',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute'
  },

  radius: {
    height: 50,
    width: 50,
    borderRadius: 50/2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0, 122, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },

  marker: {
    height: 20,
    width: 20,
    backgroundColor: 'rgba(0, 122, 255, 1)',
    borderRadius: 20/2,
    borderWidth: 2,
    borderColor: 'white',
    overflow: 'hidden'
  }
});

// AppRegistry.registerComponent('Map', () => Map);
