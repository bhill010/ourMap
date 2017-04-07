import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions/photo_actions';
import PhotoIndex from './photo_index';


const mapStateToProps = (state) => {
  return ({
    photos: Object.keys(state.photos).map(id => state.photos[id])
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchPhotos: (photoInfo) => dispatch(fetchPhotos(photoInfo))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);
