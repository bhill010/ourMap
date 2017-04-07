// import * as ApiUtil from './';

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";


export const fetchPhotos = () => dispatch => (
  ApiUtil.fetchPhotos().then( photos => dispatch(receivePhotos(photos)))
);


const receivePhotos = (photos) => ({
  type: RECEIVE_PHOTOS,
  photos
});
