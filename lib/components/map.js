import React from "react";
import { View, Text, AppRegistry, StyleSheet, TouchableOpacity } from "react-native";
import MapView from 'react-native-maps';
import { Actions } from 'react-native-router-flux';


export default class Map extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
      },

      userCoordinates: {
        latitude: 0,
        longitude: 0
      },

      markers: []
    };
  }


  componentDidMount(){

    this.watchId = navigator.geolocation.watchPosition (
      (position) => {
        let user = {latitude: position.coords.latitude, longitude: position.coords.longitude};
        let userRegion = {latitude: position.coords.latitude, longitude: position.coords.longitude, latitudeDelta: 0.002, longitudeDelta: 0.002};

        let markers = this.setPositionMarker(position.coords.latitude, position.coords.longitude);

        this.setState({ userCoordinates: user});
        this.setState({ region: userRegion });
        this.setState({ markers: markers });
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 }
    );
  }

  componentWillUnmount(){
    navigator.geolocation.clearWatch(this.watchId);
  }

  setPositionMarker(lat, long){
    let markers = [{coordinate: {latitude: lat, longitude: long}, title: 'Center'}];

    let deltas = [
      [.001, this.randomCoordinates(-.0008, .0008), 'North'],
      [- .001, this.randomCoordinates(-.0008, .0008), 'South'],
      [this.randomCoordinates(-.001, .001), .0008,'East'],
      [this.randomCoordinates(-.001, .001), -.0008, 'East']
    ];

    deltas.forEach((delta) => {
      markers.push({coordinate: {latitude: lat + delta[0], longitude: long + delta[1]}, title: delta[2]});
    });

    return markers;
  }


  onRegionChange(region) {
    // this.state.region
    this.setState({ region });
  }

  handlePress(coordinate){
    //implement navigator
    // console.log(coordinate.latitude2);
  }

  randomCoordinates(max, min){
    return (Math.random() * (max - min)) + min;
  }


  render() {
    // console.log(this.state.markers)
    return (
      <MapView
        style={styles.map}
        region={this.state.region}
        onRegionChange={this.onRegionChange.bind(this)}
      >

      <MapView.Marker
        coordinate={this.state.userCoordinates}
      >

        <View style={styles.radius}>
          <View style={styles.marker} />
        </View>

      </MapView.Marker>

      {this.state.markers.map( (marker, id) => (
      <MapView.Marker
        key={id}
        coordinate={marker.coordinate}
        title={marker.title}
        description={marker.description}
        onPress={this.handlePress.bind(this, marker.coordinate)}
        />
    ))}
      </MapView>
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
    height: '111%',
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
  },
  textStyle: {
    fontSize: 20,
    backgroundColor: 'red',
    marginTop: 600
  },
  buttonStyle: {

  }
});

// <TouchableOpacity style={styles.buttonStyle} onPress={() => Actions.employees()}>
//   <Text style={styles.textStyle}>
//     Hi
//   </Text>
// </TouchableOpacity>


// let markers = [
//   {coordinate: {latitude: lat, longitude: long}, title: 'Center'},
//   {coordinate: {latitude: lat + .001, longitude: long}, title: 'North'},
//   {coordinate: {latitude: lat - .001, longitude: long}, title: 'South'},
//   {coordinate: {latitude: lat, longitude: long - .0008}, title: 'West'},
//   {coordinate: {latitude: lat, longitude: long + .0008}, title: 'East'}
// ];
