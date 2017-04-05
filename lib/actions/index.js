import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED
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

export const loginUser = ({ email, password }) => {
  //dispatch comes from redux-thunk. used for asynchronous actions -- this action
  //makes a call to database that takes time, so we have to handle this asynchronous
  //call with redux-thunk
  return (dispatch) => {
    // make request to firebase server to attempt user login
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user });
    });
  };
};
