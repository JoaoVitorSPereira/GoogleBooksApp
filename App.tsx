import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AppTabRoutes } from './src/routes/app.tab.routes';
import AuthStackRoute from './src/routes/auth.stack.routes';

import theme from './src/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthStackRoute />
      </NavigationContainer>
    </ThemeProvider>
  );
}
