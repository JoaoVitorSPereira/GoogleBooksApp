import styled, { css } from 'styled-components/native';

export const Container = styled.Pressable`
  ${({ theme }) => css`
    width: ${theme.responsive.value(100)}px;
    height: ${theme.responsive.value(50)}px;
    border-color: ${theme.colors.text};
    border-width: 2px;
    border-radius: ${theme.responsive.value(15)}px;
  `}
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.responsive.value(20)}px;
    font-family: ${theme.fonts.regular};
  `}
`;
