import styled, { css } from 'styled-components/native';

import { FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import { BooksDTO } from '../../@types/BooksDTO';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
`;

export const LoadingActivity = styled(ActivityIndicator).attrs({
  tintColor: 'white',
  size: RFValue(40),
  color: 'white',
})``;

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

export const BooksList = styled(
  FlatList as new () => FlatList<BooksDTO[]>,
).attrs({
  showsVerticalScrollIndicator: false,

  contentContainerStyle: {
    alignItems: 'center',
  },
})`
  width: 100%;
`;

export const RefresherControl = styled(RefreshControl).attrs({
  tintColor: 'black',
})``;

export const ItemContainer = styled.TouchableOpacity`
  align-items: center;
  width: ${({ theme }) => theme.responsive.value(250)}px;
  margin-bottom: ${({ theme }) => theme.responsive.value(20)}px;
`;

export const BookTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.responsive.value(17)}px;
    font-family: ${theme.fonts.regular};
    text-align: center;
  `}
`;

export const AuthorName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.responsive.value(14)}px;
    margin-top: ${theme.responsive.value(4)}px;
    font-family: ${theme.fonts.thin};
  `}
`;

export const PhotoContainer = styled.View`
  ${({ theme }) => css`
    width: ${theme.responsive.value(150)}px;
    height: ${theme.responsive.value(180)}px;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-color: white;
    margin-top: ${theme.responsive.value(10)}px;
  `}
`;

export const IconContainer = styled.View`
  position: absolute;
  right: -20px;
  top: -20px;
`;

export const BookCover = styled.Image`
  ${({ theme }) => css`
    width: ${theme.responsive.value(150)}px;
    height: ${theme.responsive.value(180)}px;
  `}
`;
