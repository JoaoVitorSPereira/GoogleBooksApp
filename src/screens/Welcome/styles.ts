import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  ${({ theme }) => css`
    padding: ${theme.responsive.value(35)}px ${theme.responsive.value(15)}px;
  `}
`;

export const HeaderWrapper = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.responsive.value(50)}px;
    font-family: ${theme.fonts.bold};
    margin-top: ${theme.responsive.value(80)}px;
  `}
`;

export const SubTitleInputWrapper = styled.View`
  margin-top: ${({ theme }) => theme.responsive.value(70)}px;
  width: 100%;
  align-items: center;
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.responsive.value(25)}px;
    font-family: ${theme.fonts.regular};
  `}
`;

export const NameInput = styled(TextInput).attrs({
  placeholder: 'Name',
  placeholderTextColor: 'white',
})`
  ${({ theme }) => css`
    padding: 0px ${theme.responsive.value(15)}px;
    margin-top: ${theme.responsive.value(15)}px;
    height: ${theme.responsive.value(40)}px;
    width: 100%;
    color: ${theme.colors.text};
    border-width: 2px;
    border-color: ${theme.colors.text};
    border-radius: ${theme.responsive.value(20)}px;
  `}
`;

export const ButtonWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  bottom: ${({ theme }) => theme.responsive.value(50)}px;
`;
