import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
`;

export const TopSection = styled.View`
  width: 100%;
  align-items: center;
  padding: 0px ${({ theme }) => theme.responsive.value(15)}px;
`;

export const UserGreetings = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.responsive.value(30)}px;
    font-family: ${theme.fonts.regular};
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.responsive.value(17)}px;
    font-family: ${theme.fonts.regular};
    margin-top: ${theme.responsive.value(5)}px;
    margin-bottom: ${theme.responsive.value(15)}px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.responsive.value(35)}px;
    font-family: ${theme.fonts.bold};
    margin-top: ${theme.responsive.value(20)}px;
    margin-bottom: ${theme.responsive.value(10)}px;
  `}
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px
    ${({ theme }) => css`
      background-color: ${theme.colors.text};
    `};
`;
