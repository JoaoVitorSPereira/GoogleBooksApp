import React from 'react';
import SearchInput from '../../components/SearchInput';

import {
  Container,
  TopSection,
  UserGreetings,
  SubTitle,
  Title,
  Separator,
} from './styles';

export default function HomeScreen() {
  return (
    <Container>
      <TopSection>
        <UserGreetings>Hi, Pac</UserGreetings>
        <SubTitle>Which book suits for your mood today?</SubTitle>
        <SearchInput />
        <Title>Books</Title>
      </TopSection>
      <Separator />
    </Container>
  );
}
