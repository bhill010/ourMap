import React from 'react';
import { Text, View, Image } from 'react-native';
import Container from '../templates/Container';
import ContainerItem from '../templates/ContainerItem';

const PhotoDetail = ({ photo }) => {
  const { url } = photo;

  return (
    <Container>
      <ContainerItem>
        <Image
          style={styles.imageStyle}
          source={{ uri: photo }}
        />
      </ContainerItem>
    </Container>
  );
};

const styles = {
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default PhotoDetail;
