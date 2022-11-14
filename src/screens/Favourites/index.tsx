import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { RFValue } from 'react-native-responsive-fontsize';

import FavouriteButton from '../../components/FavouriteButton';
import LogoHeader from '../../components/LogoHeader';

import { useBooks } from '../../hooks/books';

import {
  Container,
  Title,
  Separator,
  FavouritesList,
  Card,
  BookTitle,
  PhotoContainer,
  BookCover,
  NoPhotoText,
  TextContainer,
} from './styles';

export default function FavouritesScreen() {
  const { favourites, removeFavorite, addFavourite } = useBooks();
  const navigation = useNavigation();
  return (
    <Container>
      <LogoHeader showBackButton />

      <Title>Favourites</Title>
      <Separator />
      <FavouritesList>
        {favourites.map(item => (
          <Card
            onPress={() => navigation.navigate('Details', { item })}
            key={item.id}
          >
            <PhotoContainer>
              {item?.volumeInfo?.imageLinks ? (
                <BookCover
                  source={{ uri: item.volumeInfo?.imageLinks.thumbnail }}
                />
              ) : (
                <NoPhotoText>NO COVER</NoPhotoText>
              )}
            </PhotoContainer>
            <TextContainer>
              <BookTitle numberOfLines={2}>{item?.volumeInfo.title}</BookTitle>
              <BookTitle numberOfLines={2}>
                Page count: {item?.volumeInfo.pageCount}
              </BookTitle>
            </TextContainer>
            <FavouriteButton
              selected={favourites.includes(item)}
              onPress={() => {
                if (favourites.includes(item)) {
                  removeFavorite(favourites, item);
                } else {
                  addFavourite(item);
                }
              }}
              style={{ marginLeft: RFValue(15) }}
            />
          </Card>
        ))}
      </FavouritesList>
    </Container>
  );
}
