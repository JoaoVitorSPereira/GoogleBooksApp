import React from 'react';

import { PressableProps } from 'react-native';

import { Container, Title } from './styles';

interface Props extends PressableProps {
  title: string;
}

export default function MainButton({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
