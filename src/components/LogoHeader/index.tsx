import React from 'react';

import GoogleLogo from '../../assets/images/google_logo.svg';
import BookLogo from '../../assets/images/book.svg';
import ArrowIcon from '../../assets/images/arrow.svg';

import { Container, LogoContainer } from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Props {
  showBackButton: boolean;
}

export default function LogoHeader({ showBackButton = false }: Props) {
  const navigation = useNavigation();
  return (
    <Container>
      {showBackButton ? (
        <ArrowIcon onPress={() => navigation.goBack()} width={RFValue(30)} />
      ) : (
        <View />
      )}
      <LogoContainer>
        <GoogleLogo width={RFValue(90)} height={RFValue(30)} />
        <BookLogo
          width={RFValue(30)}
          height={RFValue(25)}
          style={{ marginLeft: RFValue(5) }}
        />
      </LogoContainer>
      <View />
    </Container>
  );
}
