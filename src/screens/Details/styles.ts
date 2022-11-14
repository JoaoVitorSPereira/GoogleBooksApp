import { ActivityIndicator, ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
  },
})`
  flex: 1;
  ${({ theme }) =>
    css`
      background-color: ${theme.colors.primary};
    `}
`;

export const LoadingActivity = styled(ActivityIndicator).attrs({
  tintColor: 'white',
  size: RFValue(40),
  color: 'white',
})``;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.responsive.value(30)}px;
    font-family: ${theme.fonts.bold};
    text-align: center;
  `}
`;

export const AuthorNameContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.responsive.value(10)}px;
`;

export const AuthorName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.responsive.value(15)}px;
    font-family: ${theme.fonts.thin};
    text-align: center;
  `}
`;

export const Separator = styled.View`
  height: 1px;
  background-color: white;
  width: 100%;
`;

export const PhotoContainer = styled.View`
  ${({ theme }) => css`
    width: ${theme.responsive.value(200)}px;
    height: ${theme.responsive.value(250)}px;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-color: white;
    margin-top: ${theme.responsive.value(20)}px;
    margin-bottom: ${theme.responsive.value(20)}px;
  `}
`;

export const PhotoCover = styled.Image`
  ${({ theme }) => css`
    width: ${theme.responsive.value(200)}px;
    height: ${theme.responsive.value(250)}px;
  `}
`;

export const BottomPart = styled.View`
  width: 100%;
  padding: 0px ${({ theme }) => theme.responsive.value(15)}px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.responsive.value(13)}px;
    font-family: ${theme.fonts.regular};
    text-align: center;
    margin-bottom: ${theme.responsive.value(10)}px;
  `}
`;
