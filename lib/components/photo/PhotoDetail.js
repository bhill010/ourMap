import React from 'react';
import { Text, View, Image } from 'react-native';
import { Container, ContainerItem } from '../templates';
import FitImage from 'react-native-fit-image';

const PhotoDetail = ({ url }) => {
  console.log("photo detail urls below");
  console.log("" + url);
  return (
    <Container>
      <ContainerItem>
        <Image
          style={styles.imageStyle}
          source={{ uri: url }}
          resizeMode="contain"
        />
      </ContainerItem>
    </Container>
  );
};

const styles = {
  imageStyle: {
    height: 300,
    flex: 1,
    width: 300,
    alignSelf: 'center'
  },
  fitImage: {
    borderRadius: 20,
  },
  fitImageWithSize: {
    height: 300,
    width: 100
  }
};

export default PhotoDetail;
