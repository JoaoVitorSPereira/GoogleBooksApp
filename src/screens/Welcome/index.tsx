import React, { useState } from 'react';

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

import { useAuth } from '../../hooks/auth';

export default function WelcomeScreen() {
  const theme = useTheme();
  const { signIn } = useAuth();

  const [name, setName] = useState('');

  async function onSubmit(value: string) {
    try {
      await signIn(value);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <HeaderWrapper>
        <GoogleLogo />
        <BookLogo style={{ marginLeft: theme.responsive.value(10) }} />
      </HeaderWrapper>

      <Title>Welcome!</Title>

      <SubTitleInputWrapper>
        <SubTitle>Write your name to access!</SubTitle>
        <NameInput
          testID="input-name"
          value={name}
          onChangeText={value => setName(value)}
        />
      </SubTitleInputWrapper>

      <ButtonWrapper>
        <View />
        <MainButton title="Login" onPress={() => onSubmit(name)} />
      </ButtonWrapper>
    </Container>
  );
}
