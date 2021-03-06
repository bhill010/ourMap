import React, { Component } from 'react';
import { ScrollView, Image, View } from "react-native";
import PhotoDetail from './PhotoDetail';
import { getPhotoURLs } from '../../utils/photo_utils';

class PhotoIndex extends Component {
  constructor(props){
    super(props);
    this.renderPhotos = this.renderPhotos.bind(this);
    this.state = { urls: [], comments: [] };
  }


  componentDidMount(){
    let {minLatitude, maxLatitude, minLongitude, maxLongitude} = this.props.coordinates;

    fetch(`https://ourmap-64a0f.firebaseio.com/photos.json?orderBy="latitude"&startAt=${minLatitude}&endAt=${maxLatitude}`, {method: "GET"})
    .then((response) => response.json())
    .then((responseData) => {
      const photosIndex = [];
      Object.values(responseData).forEach( photo => {
        if (photo.longitude >= minLongitude && photo.longitude <= maxLongitude ) {
          photosIndex.push(photo);
        }
      });
      this.setState({urls: photosIndex.map(photo => photo.url), comments: photosIndex.map(photo => photo.comment)});
    });
    // this.setState({ urls: getPhotoURLs(37.785834,37.786634,-122.406417,-122.405417) } );

  }


  renderPhotos() {
    if (this.state.urls === undefined || this.state.urls.length === 0) {
      return null;
    } else {
      return this.state.urls.map((url, idx) =>
        <PhotoDetail key={idx} url={url.toString()} comment={this.state.comments[idx]} />
      );
    }
  }

  render(){
    // console.log(this.props);
      return (
        <View style={styles.layout}>
          <Image
            style={styles.background}
            source={{uri: 'https://res.cloudinary.com/deh9l9lyq/image/upload/v1491933503/bambooBackground_fn3yab.jpg'}}
            />
          <ScrollView>
            {this.renderPhotos()}
          </ScrollView>
        </View>
      );
    }
}

const styles = {
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    flex: 1
  },
  layout: {
    width: '100%',
    height: '100%'
  }
};

export default PhotoIndex;
