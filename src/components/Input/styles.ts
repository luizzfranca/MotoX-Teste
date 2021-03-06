import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css }  from 'styled-components/native';

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;

  margin-bottom: 8px;

 
`;

export const IconContainer = styled.View<Props>`
  height: 56px;
  width: 55px;

  justify-content: center;
  align-items: center;

  margin-right: 2px;

  ${({ isFocused, theme }) => isFocused && css`
    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.background_kawasaki};
  `};

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const InputText = styled.TextInput<Props>`
  flex: 1;
  
  background-color: ${({ theme }) => theme.colors.background_secondary};
  color: ${({ theme }) => theme.colors.text};

  ${({ isFocused, theme }) => isFocused && css`
    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.background_kawasaki};
  `};

  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;

  padding: 0 21px;
`;