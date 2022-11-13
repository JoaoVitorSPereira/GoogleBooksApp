import { useRoute } from '@react-navigation/native';
import React from 'react';
import { BooksDTO } from '../../@types/BooksDTO';

import {
  Container,
  Title,
  AuthorNameContainer,
  AuthorName,
  Separator,
  PhotoContainer,
  PhotoCover,
  BottomPart,
  Description,
} from './styles';

export default function DetailsScreen() {
  const route = useRoute();

  const params = route.params as BooksDTO;

  console.log(params.item.volumeInfo);
  return (
    <Container>
      <Title>{params.item.volumeInfo.title}</Title>
      {params.item.volumeInfo.authors ? (
        <AuthorNameContainer>
          {params.item.volumeInfo.authors.map((item, index) => (
            <AuthorName key={index}>{item}</AuthorName>
          ))}
        </AuthorNameContainer>
      ) : null}
      <Separator />

      <PhotoContainer>
        {params.item.volumeInfo.imageLinks ? (
          <PhotoCover
            source={{ uri: params.item.volumeInfo.imageLinks.thumbnail }}
          />
        ) : (
          <Title>NO COVER</Title>
        )}
      </PhotoContainer>

      <BottomPart>
        {params.item.volumeInfo.subtitle ? (
          <Description>{params.item.volumeInfo.subtitle}</Description>
        ) : null}
        {params.item.volumeInfo.description ? (
          <Description>{params.item.volumeInfo.description}</Description>
        ) : null}
        {params.item.volumeInfo.language ? (
          <Description>
            Language: {params.item.volumeInfo.language.toUpperCase()}
          </Description>
        ) : null}
      </BottomPart>
    </Container>
  );
}
