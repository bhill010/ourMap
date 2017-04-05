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

    // this.onUserCoordinateChange(this.user);
    // this.setRegion(this.state.userCoordinates.latitude, this.state.userCoordinates.longitude);
  }

  componentWillUnmount(){
    navigator.geolocation.clearWatch(this.watchId);
  }

  setPositionMarker(lat, long){
    let markers = [
      {coordinate: {latitude: lat, longitude: long}, title: 'Center'},
      {coordinate: {latitude: lat + .001, longitude: long}, title: 'North'},
      {coordinate: {latitude: lat - .001, longitude: long}, title: 'South'},
      {coordinate: {latitude: lat, longitude: long - .0008}, title: 'West'},
      {coordinate: {latitude: lat, longitude: long + .0008}, title: 'East'}
    ];

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

// send axion call with user location. Receive js object of four location when button is pressed.

// { coordinate: {latitude: 37.785833, longitude: -122.406418}, //37.785833  //-122.406418
//   title: "First",
//   description: "testing"},
//
// { coordinate: {latitude: 37.786833, longitude: -122.406418}, //37.786833,  -122.406418
//   title: "Second-North",                                      //1000
//   description: "I am second"
// },
//
// { coordinate: {latitude: 37.784833, longitude: -122.406418}, //37.784833, // -122.406418
//   title: "Third-South",                                      // -1000
//   description: "this is the south"
// },
//
// { coordinate: {latitude: 37.785833, longitude: -122.407200}, //37.785833 //-122.407200
//   title: "Fourth-West",                                                  //-1000
//   description: "this is the west"
// },
//
// { coordinate: {latitude: 37.785833, longitude: -122.405618}, //37.785833 //-122.405618
//   title: "Fifth-East",                                                    // 1000
//   description: "this is the East"
// },
//
// ] // this.props.markers
