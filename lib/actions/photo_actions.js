// import * as ApiUtil from './';

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";


export const fetchPhotos = (photoInfo) => dispatch => (
  ApiUtil.fetchPhotos(photoInfo).then( photos => dispatch(receivePhotos(photos)))
);


const receivePhotos = (photos) => ({
  type: RECEIVE_PHOTOS,
  photos
});
