import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    border-radius: ${theme.responsive?.value(15)}px;
    border-width: ${theme.responsive.value(2)}px;
    height: ${theme.responsive.value(40)}px;
    border-color: ${theme.colors.text};
    align-items: center;
    padding: 0px ${theme.responsive.value(8)}px;
  `}
  flex-direction: row;
  width: 100%;
`;

export const Input = styled.TextInput`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.regular};
    font-size: ${theme.responsive.value(14)}px;
    margin-left: ${theme.responsive.value(5)}px;
  `}
  width: 100%;
`;
