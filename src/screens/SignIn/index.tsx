import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { useTheme } from 'styled-components';
import { Alert } from 'react-native';

import { Container, Header, Title, Subtitle, Form, Footer } from './styles';

import { useNavigation } from '@react-navigation/native';

import * as Yup from 'yup';


export const SignIn = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation<any>();
  const theme = useTheme();

  async function handleLogIn() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
      })
      const data = {email}
      await schema.validate(data)
      navigation.navigate('Home');
    } catch (error) {
      if(error) {
        return Alert.alert('Digite seu e-mail')
      }
    }
  }

  //navigation.navigate('Home');
  return (
    <Container>
      <Header>
        <Title>
          Bem-vindo a Kawasaki
        </Title>
        <Subtitle>
          Faça seu login para entrar {'\n'}
          no mundo sobre duas rodas
        </Subtitle>

        <Form>
          <Input
            iconName='mail'
            placeholder='Digite seu e-mail'
            keyboardType='email-address'
            autoCorrect={false}
            autoCapitalize='none'
            onChangeText={setEmail}
            value={email}
          />
        </Form>

        <Footer>
          <Button 
            title="Entrar"
            onPress={handleLogIn}
            loading={false}
            color={theme.colors.success}
          />
        </Footer>
      </Header>
    </Container>
  );
}