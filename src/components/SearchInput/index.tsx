import React from 'react';

import SearchIcon from '../../assets/images/search.svg';

import { Container, Input } from './styles';

export default function SearchInput() {
  return (
    <Container>
      <SearchIcon />
      <Input />
    </Container>
  );
}
