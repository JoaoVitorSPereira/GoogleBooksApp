import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';

import { Text } from 'react-native';
import { BooksDTO } from '../../@types/BooksDTO';

import SearchInput from '../../components/SearchInput';
import { useAuth } from '../../hooks/auth';

import { useBooks } from '../../hooks/books';

import {
  Container,
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
} from './styles';

export default function HomeScreen() {
  const { getBooks, booksData, setSearchBook, searchBook, setPageIndex } =
    useBooks();
  const { userData } = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    (() => {
      getBooks();
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
        renderItem={({ item }) => {
          return (
            <ItemContainer
              onPress={() => navigation.navigate('Details', { item })}
            >
              <BookTitle style={{ color: 'white' }}>
                {item?.volumeInfo.title}
              </BookTitle>
              {item?.volumeInfo?.authors ? (
                <AuthorName>{item?.volumeInfo?.authors[0]}</AuthorName>
              ) : null}

              <PhotoContainer>
                {item?.volumeInfo.imageLinks ? (
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
    </Container>
  );
}
