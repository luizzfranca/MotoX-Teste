import React from 'react';
import { StatusBar } from 'react-native';

import { Button } from '../../components/Button';

import { Container, Content, Title, Message, Footer} from './styles';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

export const SchedulingComplete = () => {
  const theme = useTheme();
  const navigation = useNavigation<any>();

  function handleBackHome() {
    navigation.navigate('Home')
  }

  return (
    <Container>
      <StatusBar 
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
      />

      <Content> 
        <Title>Compra Feita! 🥳</Title>

        <Message> Agora você só precisa ir
          até a nossa loja
          pegar a sua moto,
          e se aventurar no mundo sobre duas rodas.
        </Message>
      </Content>

      <Footer>
        <Button 
          title='OK'
          onPress={handleBackHome}
          color={theme.colors.success}
        />
      </Footer>
    </Container>
  );
}