import styled  from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 126px;

  background-color: ${({ theme }) => theme.colors.background_secondary};

  border-radius: 10px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 24px;
  margin-bottom: 16px;

  margin-top: 17px;
`;

export const Details = styled.View`

`;

export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(15)}px;

  text-transform: uppercase;
  font-weight: bold;
`;

export const NameMoto = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(15)}px;
`;

export const Potency = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(15)}px;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  color: ${({ theme }) => theme.colors.success};
  font-size: ${RFValue(15)}px;
`;
export const MotoImage = styled.Image`
  width: 167px;
  height: 85px;
`;