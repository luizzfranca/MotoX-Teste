import React from 'react';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { ImageSlider } from '../../components/ImageSlider';

import { useNavigation, useRoute} from '@react-navigation/native';


import { 
  Container, 
  Header, 
  MotoImages, 
  ContentMoto, 
  DetailsMoto, 
  DescriptionMoto, 
  Brand, NameMoto, 
  Potency, ValueMoto, 
  Price,
  PurchasePeriod,
  Title,
  Footer
} from './styles';

import { useTheme } from 'styled-components';

import { MotoDTO } from '../../dtos/MotoDTO';



interface Params {
  moto: MotoDTO;
}

export const SchedulingMotoDetails = () => {
  const theme = useTheme();
  const navigation = useNavigation<any>();

  const route = useRoute();

  const { moto } = route.params as Params;

  function handleSchedulingComplete() {
    navigation.navigate('SchedulingComplete')
  }

  function handleBack() {
    navigation.goBack()
  }

  return (
    <Container>
      <Header>
        <BackButton 
          onPress={handleBack}
          color={theme.colors.success}
        />
      </Header>

      <MotoImages>
        <ImageSlider 
          imagesUrl={moto.photos} 
        />
      </MotoImages>

      <ContentMoto>
        <DetailsMoto>
          <DescriptionMoto>
            <Brand>{moto.brand}</Brand>
            <NameMoto>{moto.name}</NameMoto>
            <Potency>{moto.potency}</Potency>
          </DescriptionMoto>

          <ValueMoto>
            <Price>R${moto.price}</Price>
          </ValueMoto>
        </DetailsMoto>
        <PurchasePeriod>
          <Title>{`Dados da Compra:  \nMarca: ${moto.brand}, \nNome: ${moto.name}, \nValor: R$${moto.price},00,  \nCilindradas: ${moto.potency}, \nConfirmar compra?`}</Title>
        </PurchasePeriod>
        <Footer>
          <Button 
            title="Confirmar"
            color={theme.colors.success}
            onPress={handleSchedulingComplete}
          />
        </Footer>
      </ContentMoto>
    </Container>
  );
}