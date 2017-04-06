import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const logoutUser = () => {
  console.log("logoutUser action creater called");
  return (dispatch) => {
    console.log("logoutUser dispatch triggered");
    firebase.auth().signOut()
      .then(() => logoutUser(dispatch({ type: LOGOUT_USER })))
      .then(console.log("firebase signOut successful"));
  };
};

export const loginUser = ({ email, password }) => {
  //dispatch comes from redux-thunk. used for asynchronous actions -- this action
  //makes a call to database that takes time, so we have to handle this asynchronous
  //call with redux-thunk
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    // make request to firebase server to attempt user login
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch((error) => {
      console.log(error);

      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => loginUserFail(dispatch));
    });
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.map();
};
