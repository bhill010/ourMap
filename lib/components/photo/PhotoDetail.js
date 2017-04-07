import React from 'react';
import { Text, View, Image } from 'react-native';
import Container from '../templates/Container';
import ContainerItem from '../templates/ContainerItem';

const PhotoDetail = ({ url }) => {
  debugger
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
    width: null
  }
};

export default PhotoDetail;
