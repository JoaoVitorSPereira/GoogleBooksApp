import React from 'react';

import { TextInputProps } from 'react-native';

import SearchIcon from '../../assets/images/search.svg';

import { Container, Input } from './styles';

export default function SearchInput({ ...rest }: TextInputProps) {
  return (
    <Container>
      <SearchIcon />
      <Input {...rest} />
    </Container>
  );
}
