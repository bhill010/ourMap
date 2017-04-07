import { connect } from 'react-redux';
import Map from './map';
import { fetchPhotos } from '../../actions/photo_actions';


const mapStateToProps = (state) => {
  return ({
    photos: state.photos
  });
};
