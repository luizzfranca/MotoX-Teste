import styled  from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList, FlatListProps } from 'react-native';

import { MotoDTO } from '../../dtos/MotoDTO';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;

  background-color: ${({ theme }) => theme.colors.success};

  justify-content: flex-end;
  padding: 32px 24px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family:  ${({ theme }) => theme.fonts.primary_500}; 
  font-weight: bold;

  color: ${({ theme }) => theme.colors.shape};
`;

export const TotalMotors = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family:  ${({ theme }) => theme.fonts.primary_500};

  color: ${({ theme }) => theme.colors.shape};

`;

export const MotoList = styled(
  FlatList as new (props: FlatListProps<MotoDTO>) => FlatList<MotoDTO>
)
.attrs({
  contentContainerStyle: {
    padding: 24
  },
  showsVerticalScrollIndicator: false
})``;
