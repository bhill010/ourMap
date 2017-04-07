import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PhotosReducer from './photo_reducer';

export default combineReducers({
  auth: AuthReducer,
  photos: PhotosReducer
});
