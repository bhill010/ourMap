import React from "react";
import { View, Text, AppRegistry, StyleSheet } from "react-native";
import MapView from 'react-native-maps';


export default class Map extends React.Component {

  constructor(props){
    super(props);

    //Will take in the User's current lat and long.
    // this.user = {
    //     latitude: 37.789,             //37.78825,
    //     longitude: -122.4200            //-122.4324
    // };

    this.state = {
      region: {
        latitude: 37.33067599,
        longitude: -122.03021599,
        latitudeDelta: 0.09,    // 0.0922
        longitudeDelta: 0.004,   // 0.0421
      },

      userCoordinates: {
        latitude: 0,             //37.78825,
        longitude: 0            //-122.4324
      }
    };
  }



  componentDidMount(){

    this.watchId = navigator.geolocation.watchPosition (
      (position) => {
        let user = {latitude: position.coords.latitude, longitude: position.coords.longitude}
        this.setState({ userCoordinates: user});
        this.setState({ region: {} })
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 }
    );

    // this.onUserCoordinateChange(this.user);
    this.setRegion(this.state.userCoordinates.latitude, this.state.userCoordinates.longitude);
  }

  componentWillUnmount(){
    navigator.geolocation.clearWatch(this.watchId);
  }

  setRegion(lat, long){
    let region = {};
    region.latitude = lat;
    region.longitude = long;
    region.latitudeDelta = 0.005;
    region.longitudeDelta = 0.004;
    this.setState({region});
    console.log(region)
  }

  onUserCoordinateChange(userCoordinates){
    this.setState({ userCoordinates });
  }

  onRegionChange(region) {
    // this.state.region
    this.setState({ region });
  }

  render() {
    // console.log(this.state.userCoordinates)
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

// AppRegistry.registerComponent('Map', () => Map);

// render(){
//
//   return(
//     <View style={styles.containerStyle}>
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: 37.78825,
//           longitude: -122.4324,
//           latitudeDelta: 0.005,
//           longitudeDelta: 0.002,
//         }}
//       >
//
//         <MapView.Marker
//           coordinate={{
//             latitude: 37.78825,
//             longitude: -122.4324
//           }}>
//
//           <View style={styles.radius}>
//             <View style={styles.marker} />
//           </View>
//
//         </MapView.Marker>
//
//       </MapView>
//     </View>
//   );
// }



  //
  // constructor(props){
  //   super(props);
  //
  //   this.state = {
  //     region: {
  //       latitude: 37.78825,
  //       longitude: -122.4324,
  //       latitudeDelta: 0.0922,
  //       longitudeDelta: 0.0421,
  //     }
  //   };
  // }
  //
  // // getInitialState() {
  // //   return {
  // //     region: {
  // //       latitude: 37.78825,
  // //       longitude: -122.4324,
  // //       latitudeDelta: 0.0922,
  // //       longitudeDelta: 0.0421,
  // //     },
  // //   };
  // // }
  //
  // onRegionChange(region) {
  //   this.setState({ region });
  // }
  //
  // render() {
  //   return (
  //     <MapView
  //       style={styles.map}
  //       region={this.state.region}
  //       onRegionChange={this.onRegionChange.bind(this)}
  //     />
  //   );
  // }
