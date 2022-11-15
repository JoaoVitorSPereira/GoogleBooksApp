import React from 'react';
import { render } from '@testing-library/react-native';

import SearchInput from '../../../components/SearchInput';
import { ThemeProvider } from 'styled-components';
import theme from '../../../styles/theme';

describe('Component: Search Input', () => {
  it('must have a valid placeholder', () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <SearchInput
          testID="input-search"
          placeholder="Search for a book or writer"
          autoCorrect={false}
        />
      </ThemeProvider>,
    );

    const inputComponent = getByPlaceholderText('Search for a book or writer');

    expect(typeof inputComponent).toBeTruthy();
  });
});
