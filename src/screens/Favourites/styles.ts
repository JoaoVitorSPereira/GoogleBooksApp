import styled, { css } from 'styled-components/native';

import { ScrollView } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.responsive.value(30)}px;
    font-family: ${theme.fonts.bold};
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

export const FavouritesList = styled(ScrollView).attrs({
  contentContainerStyle: { width: '100%', justifyContent: 'flex-start' },
})`
  width: 100%;
`;

export const Card = styled.Pressable`
  width: 100%;
  height: ${({ theme }) => theme.responsive.value(80)}px;
  flex-direction: row;
  padding: 15px;
  align-items: center;
`;

export const BookTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.responsive.value(12)}px;
    margin-top: ${theme.responsive.value(4)}px;
    font-family: ${theme.fonts.regular};
    margin-left: ${theme.responsive.value(10)}px
    width: ${theme.responsive.value(200)}px;
  `}
`;

export const PhotoContainer = styled.View`
  ${({ theme }) => css`
    width: ${theme.responsive.value(50)}px;
    height: ${theme.responsive.value(50)}px;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-color: white;
    margin-top: ${theme.responsive.value(10)}px;
  `}
`;

export const BookCover = styled.Image`
  ${({ theme }) => css`
    width: ${theme.responsive.value(50)}px;
    height: ${theme.responsive.value(50)}px;
  `}
`;

export const NoPhotoText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.responsive.value(14)}px;
    margin-top: ${theme.responsive.value(4)}px;
    font-family: ${theme.fonts.thin};
  `}
`;

export const TextContainer = styled.View``;
