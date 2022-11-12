import React from 'react';

import { View } from 'react-native';

import GoogleLogo from '../../assets/images/google_logo.svg';
import BookLogo from '../../assets/images/book.svg';

import {
  Container,
  HeaderWrapper,
  Title,
  SubTitleInputWrapper,
  SubTitle,
  NameInput,
  ButtonWrapper,
} from './styles';

import { useTheme } from 'styled-components';
import MainButton from '../../components/MainButton';

export default function WelcomeScreen() {
  const theme = useTheme();
  return (
    <Container>
      <HeaderWrapper>
        <GoogleLogo />
        <BookLogo style={{ marginLeft: theme.responsive.value(10) }} />
      </HeaderWrapper>

      <Title>Welcome!!</Title>

      <SubTitleInputWrapper>
        <SubTitle>Write your name to access!</SubTitle>
        <NameInput />
      </SubTitleInputWrapper>

      <ButtonWrapper>
        <View />
        <MainButton title="Login" />
      </ButtonWrapper>
    </Container>
  );
}
