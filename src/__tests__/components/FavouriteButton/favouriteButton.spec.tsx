import React from 'react';

import { render } from '@testing-library/react-native';

import FavouriteButton from '../../../components/FavouriteButton';

import { ThemeProvider } from 'styled-components';

import theme from '../../../styles/theme';

describe('Component: Favourite Button', () => {
  it('must have a truthy selected value', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <FavouriteButton testID="button-favourite" selected />
      </ThemeProvider>,
    );

    const buttonComponent = getByTestId('button-favourite');

    expect(buttonComponent.props.selected).toBeTruthy();
  });
});
