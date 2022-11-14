import React from 'react';

import HeartIcon from '../../assets/images/heart.svg';

import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { useTheme } from 'styled-components';

import { RFValue } from 'react-native-responsive-fontsize';

interface Props extends TouchableOpacityProps {
  selected: boolean;
}

export default function FavouriteButton({ selected, ...rest }: Props) {
  const theme = useTheme();
  return (
    <TouchableOpacity {...rest}>
      <HeartIcon
        fill={selected ? theme.colors.red : 'transparent'}
        width={RFValue(20)}
        height={RFValue(20)}
      />
    </TouchableOpacity>
  );
}
