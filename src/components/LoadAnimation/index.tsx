import React from 'react';

import LottieView from 'lottie-react-native'
import loadingMoto from '../../assets/loading.json'

import { Container } from './styles';

export const LoadAnimation = () => {
  return (
    <Container>
      <LottieView
        source={loadingMoto}
        style={{ height: 200}}
        resizeMode='contain'
        autoPlay
        loop
      />
    </Container>
  );
}