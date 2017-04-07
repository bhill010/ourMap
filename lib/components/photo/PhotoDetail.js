import React from 'react';
import { Text, View, Image } from 'react-native';
import { Container, ContainerItem } from '../templates';

const PhotoDetail = ({ url }) => {
  console.log("photo detail urls below");
  console.log("" + url);
  return (
    <Container>
      <ContainerItem>
        <Image
          style={styles.imageStyle}
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
    width: 300,
    resizeMode: 'cover'
  }
};

export default PhotoDetail;
