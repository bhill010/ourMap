import React, { Component } from 'react';
import { ScrollView } from "react-native";
import PhotoDetail from './PhotoDetail';

class PhotoIndex extends Component {
  constructor(props){
    super(props);
    this.renderPhotos = this.renderPhotos.bind(this);
  }

  componentDidMount(){
    console.log(this.props.coordinates);
    // this.props.fetchPhotos();
  }

  renderPhotos() {
    return this.props.photos.map((photo, idx) =>
      <PhotoDetail key={idx} photo={photo} />
    );
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
