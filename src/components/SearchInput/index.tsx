import React from 'react';

import { TextInputProps } from 'react-native';

import { useTheme } from 'styled-components';

import SearchIcon from '../../assets/images/search.svg';

import { Container, Input } from './styles';

export default function SearchInput({ ...rest }: TextInputProps) {
  const theme = useTheme();
  return (
    <Container>
      <SearchIcon />
      <Input {...rest} />
    </Container>
  );
}
