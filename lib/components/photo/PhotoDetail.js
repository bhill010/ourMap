import React from 'react';
import { Text, View, Image } from 'react-native';
import { Container, ContainerItem } from '../templates';
import FitImage from 'react-native-fit-image';

const PhotoDetail = ({ url, comment }) => {
  return (
    <Container>
      <ContainerItem>
        <FitImage
          style={styles.fitImageWithSize}
          source={{ uri: url }}
        />
      </ContainerItem>
    </Container>
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
    width: 353
  }
};

export default PhotoDetail;
