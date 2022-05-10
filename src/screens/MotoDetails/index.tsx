import React from 'react';
import { StatusBar} from 'react-native'
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { ImageSlider } from '../../components/ImageSlider';
import { useNavigation, useRoute } from '@react-navigation/native';

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
  AboutMoto,
  Footer
} from './styles';

import { useTheme } from 'styled-components';
import { MotoDTO } from '../../dtos/MotoDTO';

interface Params {
  moto: MotoDTO;
}

export const MotoDetails = () => {
  const theme = useTheme();
  const navigation = useNavigation<any>();
  
  const route = useRoute();
  const { moto } = route.params as Params;

  

  function handleScheduling(moto: MotoDTO) {
    navigation.navigate('SchedulingMotoDetails', { moto })
  }

  function handleBack() {
    navigation.goBack()
  }

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
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
            <Price>R$ {moto.price}</Price>
          </ValueMoto>
        </DetailsMoto>
        <AboutMoto>{moto.about}</AboutMoto>
        <Footer>
          <Button 
            title="Comprar"
            color={theme.colors.success}
            onPress={() => handleScheduling(moto)}
          />
        </Footer>
      </ContentMoto>
    </Container>
  );
}