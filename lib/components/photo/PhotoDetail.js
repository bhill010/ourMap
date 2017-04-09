import React from 'react';
import { Text, View, Image } from 'react-native';
import { PhotoContainer, PhotoItem } from '../templates';
import FitImage from 'react-native-fit-image';

const PhotoDetail = ({ url, comment }) => {
  return (
    <PhotoContainer style={styles.picBorder}>
      <PhotoItem style={styles.picBorder}>
        <FitImage
          style={styles.fitImageWithSize}
          source={{ uri: url }}
        />
    </PhotoItem >
      <View style={styles.commentStyle}>
        <Text style={styles.commentTextStyle}>{comment}</Text>
      </View>
    </PhotoContainer>
  );
};

const styles = {
  imageStyle: {
    height: 300,
    flex: 1,
    width: 100,
    resizeMode: 'contain'
  },
  fitImage: {
    borderRadius: 20,
  },
  fitImageWithSize: {
    height: 300,
    width: 343
  },
  commentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 10
  },
  commentTextStyle: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Chalkboard SE'
  },
  picBorder: {
    backgroundColor: 'black'
  }
};

export default PhotoDetail;
