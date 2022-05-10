import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Details, Brand, NameMoto, Potency, Price, MotoImage } from './styles';

interface MotoData {
  brand: string;
  name: string;
  potency: string;
  price: string;
  thumbnail: string;
}

interface Props extends TouchableOpacityProps {
  data: MotoData;
}

export const Moto = ({ data, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <NameMoto>{data.name}</NameMoto>
        <Potency>{data.potency}</Potency>
        <Price>{`R$ ${data.price}`}</Price>
      </Details>

      <MotoImage 
        source={{ uri: data.thumbnail }} 
        resizeMode='contain'
      />
    </Container>
  );
}


