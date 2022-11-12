import React from 'react';

import { ThemeProvider } from 'styled-components';

import { AppProvider } from './src/hooks';

import { Routes } from './src/routes';

import theme from './src/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </ThemeProvider>
  );
}
