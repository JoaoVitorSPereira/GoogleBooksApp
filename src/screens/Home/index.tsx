import React, { useEffect, useState } from 'react';

import { Text } from 'react-native';

import { useNavigation, useTheme } from '@react-navigation/native';

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
  RefresherControl,
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
  const theme = useTheme();

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
          placeholder="Search for a book or an author"
          placeholderTextColor={theme.colors.text}
        />
        <Title>Books</Title>
      </TopSection>
      <Separator />

      <BooksList<BooksDTO[]>
        data={booksData}
        refreshControl={
          <RefresherControl
            refreshing={loading}
            onRefresh={() => searchBooks()}
          />
        }
        onEndReached={() => {
          if (booksData.length >= 10) {
            setPageIndex(prevState => prevState + 10);
          }
        }}
        keyExtractor={() => String(Math.random())}
        onEndReachedThreshold={0.5}
        renderItem={({ item }: BooksDTO) => {
          return (
            <ItemContainer
              onPress={() => navigation.navigate('Details', { item })}
            >
              {item.volumeInfo?.title ? (
                <BookTitle style={{ color: 'white' }}>
                  {item.volumeInfo.title}
                </BookTitle>
              ) : null}
              {item.volumeInfo?.authors ? (
                <AuthorName>{item.volumeInfo.authors[0]}</AuthorName>
              ) : null}

              <PhotoContainer>
                <IconContainer>
                  <FavouriteButton
                    selected={favourites.find(itens => itens.id === item.id)}
                    onPress={() => {
                      if (favourites.find(itens => itens.id === item.id)) {
                        removeFavorite(favourites, item);
                      } else {
                        addFavourite(favourites, item);
                      }
                    }}
                  />
                </IconContainer>
                {item.volumeInfo?.imageLinks ? (
                  <BookCover
                    source={{ uri: item.volumeInfo.imageLinks.thumbnail }}
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
