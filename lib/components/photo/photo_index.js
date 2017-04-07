import React, { Component } from 'react';
import { ScrollView } from "react-native";
import PhotoDetail from './PhotoDetail';
import { getPhotoURLs } from '../../utils/photo_utils';

class PhotoIndex extends Component {
  constructor(props){
    super(props);
    this.renderPhotos = this.renderPhotos.bind(this);
    this.state = { urls: [] };
  }


  componentDidMount(){
    fetch(`https://ourmap-64a0f.firebaseio.com/photos.json?orderBy="latitude"&startAt=37.785834&endAt=37.786634`, {method: "GET"})
    .then((response) => response.json())
    .then((responseData) => {
      const photosIndex = [];
      Object.values(responseData).forEach( photo => {
        if (photo.longitude > -122.406417 && photo.longitude < -122.405417 ) {
          photosIndex.push(photo);
        }
      });
      this.setState({urls: photosIndex.map(photo => photo.url)});
    });
    // this.setState({ urls: getPhotoURLs(37.785834,37.786634,-122.406417,-122.405417) } );

  }

  componentWillReceiveProps(nextProps) {
  }


  renderPhotos() {

    if (this.state.urls === undefined || this.state.urls.length === 0) {
      return null;
    } else {
      console.log("photo index render photos triggered");
      console.log(this.state.urls);
      return this.state.urls.map((url, idx) =>
        <PhotoDetail key={idx} url={url.toString()} />
      );
    }
  }

  render(){
    // console.log(this.props);
      return (
        <ScrollView>
          {this.renderPhotos()}
        </ScrollView>
      );
    }
}

export default PhotoIndex;
