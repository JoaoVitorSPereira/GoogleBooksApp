import React from 'react';

import { render } from '@testing-library/react-native';

import LogoHeader from '../../../components/LogoHeader';

import { ThemeProvider } from 'styled-components';

import theme from '../../../styles/theme';

describe('Component: Favourite Button', () => {
  it('must have a truthy selected value', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <LogoHeader showBackButton />
      </ThemeProvider>,
    );

    const buttonComponent = getByTestId('header-logo');

    expect(buttonComponent.props.showBackButton).toBeTruthy();
  });
});
