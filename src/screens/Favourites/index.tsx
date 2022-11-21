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
import { BooksDTO } from '../../@types/BooksDTO';

export default function FavouritesScreen() {
  const { favourites, removeFavorite, addFavourite } = useBooks();
  const navigation = useNavigation();

  return (
    <Container>
      <LogoHeader showBackButton />

      <Title>Favourites</Title>
      <Separator />
      <FavouritesList>
        {favourites.map(items => (
          <Card
            onPress={() => navigation.navigate('Details', { item: items })}
            key={items.id}
          >
            <PhotoContainer>
              {items?.volumeInfo?.imageLinks ? (
                <BookCover
                  source={{ uri: items.volumeInfo?.imageLinks.thumbnail }}
                />
              ) : (
                <NoPhotoText>NO COVER</NoPhotoText>
              )}
            </PhotoContainer>
            <TextContainer>
              <BookTitle numberOfLines={2}>{items?.volumeInfo.title}</BookTitle>
              <BookTitle numberOfLines={2}>
                Page count: {items?.volumeInfo.pageCount}
              </BookTitle>
            </TextContainer>
            <FavouriteButton
              selected
              onPress={() => {
                removeFavorite(favourites, items);
              }}
              style={{ marginLeft: RFValue(15) }}
            />
          </Card>
        ))}
      </FavouritesList>
    </Container>
  );
}
