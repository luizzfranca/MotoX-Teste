import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { Moto } from '../../components/Moto';

import { useNavigation } from '@react-navigation/native';

import { MotoDTO } from '../../dtos/MotoDTO';



import { 
  Container, 
  Header, 
  HeaderContent, 
  Title, 
  TotalMotors, 
  MotoList 
} from './styles';
import { api } from '../../services/api';
import { LoadAnimation } from '../../components/LoadAnimation';

export const Home = () => {

  const [motors, setMotors] = useState<MotoDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation<any>();

  function handleMotoDetails(moto: MotoDTO) {
    navigation.navigate('MotoDetails', { moto })
  }

  useEffect(() => {
    async function fetchMotors(){
      try {
        const response = await api.get('/motors');
        setMotors(response.data);

      } catch (error) {
        console.log(error.response);
      } finally {
        setLoading(false);
      }
    }

    fetchMotors();
  },[]);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <HeaderContent>
          <Title>Kawasaki</Title>
          <TotalMotors> Total de {motors.length} motos</TotalMotors>
        </HeaderContent>
      </Header>
      
      { loading ? <LoadAnimation /> :
        <MotoList
          data={motors}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Moto data={item}  onPress={() => handleMotoDetails(item)}/>}
        />
      }
    </Container>
  );
}
