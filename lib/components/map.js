import React from "react";
import { View, Text, AppRegistry, StyleSheet } from "react-native";
import MapView from 'react-native-maps';


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

      markers: [

        { coordinate: {latitude: 37.785833, longitude: -122.406418}, //37.785834  //-122.406417
          title: "hello",
          description: "testing"},

        { coordinate: {latitude: 37.785950, longitude: -122.406570},
          title: "Hi",
          description: "I am good"
          }

      ] // this.props.markers
    };
  }


  componentDidMount(){

    this.watchId = navigator.geolocation.watchPosition (
      (position) => {
        let user = {latitude: position.coords.latitude, longitude: position.coords.longitude};
        let userRegion = {latitude: position.coords.latitude, longitude: position.coords.longitude, latitudeDelta: 0.005, longitudeDelta: 0.004};

        this.setState({ userCoordinates: user});
        this.setState({ region: userRegion })
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 }
    );

    // this.onUserCoordinateChange(this.user);
    // this.setRegion(this.state.userCoordinates.latitude, this.state.userCoordinates.longitude);
  }

  componentWillUnmount(){
    navigator.geolocation.clearWatch(this.watchId);
  }

  // setRegion(lat, long){
  //   let region = {};
  //   region.latitude = lat;
  //   region.longitude = long;
  //   region.latitudeDelta = 0.005;
  //   region.longitudeDelta = 0.004;
  //   this.setState({region});
  // }

  // onUserCoordinateChange(userCoordinates){
  //   this.setState({ userCoordinates });
  // }

  onRegionChange(region) {
    // this.state.region
    this.setState({ region });
  }

  handlePress(){
    //implement navigator
  }

  render() {
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
        onPress={this.handlePress.bind(this)}
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
