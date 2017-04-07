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

  componentWillMount(){
    console.log(getPhotoURLs);
    getPhotoURLs(37.785834,37.786634,-122.406417,-122.405417)
      .then(response => this.setState({ urls: response }));
    // console.log(this.props)
    // this.props.fetchPhotos();
  }

  renderPhotos() {
    if (this.state.urls === undefined) {
      return;
    } else {
      return this.state.urls.map((url, idx) =>
        <PhotoDetail key={idx} url={url} />
      );
    }
  }

  render(){
    // console.log(this.props);
    console.log(this.state.urls);
      return (
        <ScrollView>
          {this.renderPhotos()}
        </ScrollView>
      );
    }
}

export default PhotoIndex;
