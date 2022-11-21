import React, { useEffect, useState } from 'react';

import { useRoute } from '@react-navigation/native';

import { format } from 'date-fns';

import { BooksDTO } from '../../@types/BooksDTO';

import {
  Container,
  LoadingActivity,
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
  const [loading, setLoading] = useState(false);

  const route = useRoute();

  const { item } = route.params as BooksDTO;

  useEffect(() => {
    (() => {
      setLoading(true);
      if (item) {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <Container>
      {loading ? (
        <LoadingActivity />
      ) : (
        <>
          <Title>{item.volumeInfo.title}</Title>
          {item.volumeInfo.authors ? (
            <AuthorNameContainer>
              {item.volumeInfo.authors.map((item, index) => (
                <AuthorName key={index}>{item}</AuthorName>
              ))}
            </AuthorNameContainer>
          ) : null}
          <Separator />

          <PhotoContainer>
            {item.volumeInfo.imageLinks ? (
              <PhotoCover
                source={{ uri: item.volumeInfo.imageLinks.thumbnail }}
              />
            ) : (
              <Title>NO COVER</Title>
            )}
          </PhotoContainer>

          <BottomPart>
            {item.volumeInfo.subtitle ? (
              <Description>{item.volumeInfo.subtitle}</Description>
            ) : null}
            {item.volumeInfo.description ? (
              <Description>{item.volumeInfo.description}</Description>
            ) : null}
            {item.volumeInfo.language ? (
              <Description>
                Language: {item.volumeInfo.language.toUpperCase()}
              </Description>
            ) : null}
            {item.volumeInfo.pageCount ? (
              <Description>Pages: {item.volumeInfo.pageCount}</Description>
            ) : null}
            {item.volumeInfo.publishedDate ? (
              <Description>
                Published:{' '}
                {format(new Date(item.volumeInfo.publishedDate), 'dd/MM/yyyy')}
              </Description>
            ) : null}
          </BottomPart>
        </>
      )}
    </Container>
  );
}
