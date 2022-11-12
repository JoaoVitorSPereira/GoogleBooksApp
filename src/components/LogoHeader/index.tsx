import React from 'react';

import GoogleLogo from '../../assets/images/google_logo.svg';
import BookLogo from '../../assets/images/book.svg';

import { Container } from './styles';
import { RFValue } from 'react-native-responsive-fontsize';

export default function LogoHeader() {
  return (
    <Container>
      <GoogleLogo width={RFValue(90)} height={RFValue(30)} />
      <BookLogo
        width={RFValue(30)}
        height={RFValue(25)}
        style={{ marginLeft: RFValue(5) }}
      />
    </Container>
  );
}
