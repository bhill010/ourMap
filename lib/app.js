import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
import View from 'react-native';

import firebase from 'firebase';

import { Header, Button, Spinner } from './components/templates';
import LoginForm from './components/LoginForm';
import Map from './components/map';
import CameraView from './components/camera';
// import PhotoURLForm from './components/photo_url_form';
// import Geolocation from './components/geolocation';

import PhotoUpload from './components/photo_upload';


class App extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = { loggedIn: null };
//   }
//
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBoSF8kdHItfu_FymJN7re1WOIzqWqlAVM",
      authDomain: "ourmap-64a0f.firebaseapp.com",
      databaseURL: "https://ourmap-64a0f.firebaseio.com",
      projectId: "ourmap-64a0f",
      storageBucket: "ourmap-64a0f.appspot.com",
      messagingSenderId: "526709350988"
    });
  }
//
//   //onAuthStateChanged is an event handler from firebase that triggers on signing in and signing out
//
//   // this function is called whenever the user signs in or signs out
//   // if the user is signed in, the user argument below will be a valid user object,
//   // or else it will be null
//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       this.setState({ loggedIn: true });
//     } else {
//       this.setState({ loggedIn: false });
//     }
//   });
// }
//
// renderContent() {
//     switch (this.state.loggedIn) {
//       case true:
//         return (
//           <TouchableOpacity onPress={() => firebase.auth().signOut()} style={styles.buttonStyle}>
//             <Text style={styles.textStyle}>
//               Sign Out
//             </Text>
//           </TouchableOpacity>
//         );
//       case false:
//         return <LoginForm />;
//       default:
//         return (
//           <View style={styles.appSpinnerStyle}>
//             <Spinner size="large" />
//           </View>
//         );
//     }
//   }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  view: {
    width: '100%',
    height: '100%'
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  appSpinnerStyle: {
    alignSelf: 'center',
    marginBottom: 150
  }
};

export default App;

// <View style={styles.view}>
//   <Header headerText="ourMap" />
//   { this.renderContent() }
// </View>
