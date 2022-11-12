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
  const { getBooks, booksData, setSearchBook, searchBook } = useBooks();
  const { userData } = useAuth();

  useEffect(() => {
    (() => {
      getBooks();
    })();
  }, []);
  return (
    <Container>
      <TopSection>
        <UserGreetings>Hi, {userData.name}</UserGreetings>
        <SubTitle>Which book suits for your mood today?</SubTitle>
        <SearchInput
          value={searchBook}
          onChangeText={value => setSearchBook(value)}
        />
        <Title>Books</Title>
      </TopSection>
      <Separator />
      <BooksList<BooksDTO>
        data={booksData}
        renderItem={({ item }) => {
          return (
            <ItemContainer>
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
