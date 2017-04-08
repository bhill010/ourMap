import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import MapView from 'react-native-maps';
import { Actions } from 'react-native-router-flux';
import { Footer, Header } from '../templates';


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
      { enableHighAccuracy: false, timeout: 0, maximumAge: Infinity, distanceFilter: .001 },
    );
  }

  // componentWillUnmount(){
  //   console.log(this.watchId)
  //   navigator.geolocation.clearWatch(this.watchId);
  // }

  setPositionMarker(lat, long){
    let markers = [];

    let deltas = [
      [this.randomCoordinates(.0003, .0008), this.randomCoordinates(.0002, .0009), 'TopRight'],
      [this.randomCoordinates(-.0003, -.0008), this.randomCoordinates(-.0002, -.0009),'BottomLeft'],
      [this.randomCoordinates(.0003, .0008), this.randomCoordinates(-.0002, -.0009), 'TopLeft'],
      [this.randomCoordinates(-.0003, -.0008), this.randomCoordinates(.0002, .0009), 'BottomRight']
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

  handlePress(marker){
    let coordinates = {};

    if(marker.title === "TopRight") {
        coordinates.minLatitude = this.state.userCoordinates.latitude;
        coordinates.minLongitude = this.state.userCoordinates.longitude;
        coordinates.maxLatitude = this.state.userCoordinates.latitude + .0008;
        coordinates.maxLongitude = this.state.userCoordinates.longitude + .0009;
    } else if(marker.title === "TopLeft"){
        coordinates.minLatitude = this.state.userCoordinates.latitude - .0008;
        coordinates.minLongitude = this.state.userCoordinates.longitude;
        coordinates.maxLatitude = this.state.userCoordinates.latitude;
        coordinates.maxLongitude = this.state.userCoordinates.longitude + .0009;
    } else if(marker.title === "BottomRight"){
        coordinates.minLatitude = this.state.userCoordinates.latitude;
        coordinates.minLongitude = this.state.userCoordinates.longitude - .0009;
        coordinates.maxLatitude = this.state.userCoordinates.latitude + .0008;
        coordinates.maxLongitude = this.state.userCoordinates.longitude;
    } else if(marker.title === "BottomLeft"){
        coordinates.minLatitude = this.state.userCoordinates.latitude - .0008;
        coordinates.minLongitude = this.state.userCoordinates.longitude - .0009;
        coordinates.maxLatitude = this.state.userCoordinates.latitude;
        coordinates.maxLongitude = this.state.userCoordinates.longitude;
    }

    Actions.photoIndex({coordinates}); //implement navigator
  }

  randomCoordinates(max, min){
    return (Math.random() * (max - min)) + min;
  }

  openCamera() {
    // Actions.camera();
    Actions.photoForm();
  }


  render() {
    return (
      <MapView
        style={styles.map}
        region={this.state.region}
        onRegionChange={this.onRegionChange.bind(this)}
      >

        <MapView.Marker
          coordinate={this.state.userCoordinates}>

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
          onPress={this.handlePress.bind(this, marker)} >

          <Image source={require('../../assets/cloud.png')} style={{width: 42, height: 42}} />

        </MapView.Marker>
      ))}

        <Footer onPress={this.openCamera.bind(this)} footerText={"Upload"} />
      </MapView>
    );
  }

}

const styles = StyleSheet.create({

  map: {
    marginTop: 10,
    width: '100%',
    height: '110%',
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
    backgroundColor: 'rgba(188, 150, 229, 0.1)', //rgba(0, 122, 255, 0.1)
    borderWidth: 1,
    borderColor: 'rgba(158, 92, 229, 0.3)', //rgba(0, 122, 255, 0.3)
    alignItems: 'center',
    justifyContent: 'center'
  },

  marker: {
    height: 20,
    width: 20,
    backgroundColor: 'rgba(147, 75, 225, 1)', // 0, 122,255,1
    borderRadius: 20/2,
    borderWidth: 2,
    borderColor: 'white',
    overflow: 'hidden'
  },

});

//testing
// https://cdn1.iconfinder.com/data/icons/hawcons/32/698868-icon-132-cloud-128.png
