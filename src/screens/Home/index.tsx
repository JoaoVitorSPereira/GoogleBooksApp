import React, { useEffect, useState } from 'react';

import { Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { BooksDTO } from '../../@types/BooksDTO';

import FavouriteButton from '../../components/FavouriteButton';
import SearchInput from '../../components/SearchInput';

import { useAuth } from '../../hooks/auth';
import { useBooks } from '../../hooks/books';

import {
  Container,
  LoadingActivity,
  TopSection,
  UserGreetings,
  SubTitle,
  Title,
  Separator,
  BooksList,
  ItemContainer,
  BookTitle,
  AuthorName,
  PhotoContainer,
  BookCover,
  IconContainer,
} from './styles';

export default function HomeScreen() {
  const {
    loading,
    getBooks,
    booksData,
    setSearchBook,
    searchBook,
    setPageIndex,
    favourites,
    addFavourite,
    removeFavorite,
    searchBooks,
  } = useBooks();
  const { userData } = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    (() => {
      searchBooks();
    })();
  }, []);
  return (
    <Container>
      <TopSection>
        <UserGreetings>Hi, {userData.name}</UserGreetings>
        <SubTitle>Which book suits your mood today?</SubTitle>
        <SearchInput
          value={searchBook}
          onChangeText={value => setSearchBook(value)}
        />
        <Title>Books</Title>
      </TopSection>
      <Separator />

      <BooksList<BooksDTO>
        data={booksData}
        onEndReached={() => {
          if (booksData.length >= 10) {
            setPageIndex(prevState => prevState + 1);
          }
        }}
        keyExtractor={item => String(item.id)}
        onEndReachedThreshold={0.5}
        renderItem={({ item }) => {
          return (
            <ItemContainer
              onPress={() => navigation.navigate('Details', { item })}
            >
              {item?.volumeInfo?.title ? (
                <BookTitle style={{ color: 'white' }}>
                  {item?.volumeInfo.title}
                </BookTitle>
              ) : null}
              {item?.volumeInfo?.authors ? (
                <AuthorName>{item?.volumeInfo?.authors[0]}</AuthorName>
              ) : null}

              <PhotoContainer>
                <IconContainer>
                  <FavouriteButton
                    selected={favourites.find(itens => itens.id === item.id)}
                    onPress={() => {
                      if (favourites.includes(item)) {
                        removeFavorite(favourites, item);
                      } else {
                        addFavourite(favourites, item);
                      }
                    }}
                  />
                </IconContainer>
                {item?.volumeInfo?.imageLinks ? (
                  <BookCover
                    source={{ uri: item?.volumeInfo.imageLinks.thumbnail }}
                  />
                ) : (
                  <BookTitle>This book has no cover!</BookTitle>
                )}
              </PhotoContainer>
            </ItemContainer>
          );
        }}
      />
      {loading && <LoadingActivity />}
    </Container>
  );
}
