import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks/auth';

import { AppTabRoutes } from './app.tab.routes';

import AuthStackRoute from './auth.stack.routes';

export function Routes() {
  const { userData } = useAuth();

  return (
    <NavigationContainer>
      {userData.name ? <AppTabRoutes /> : <AuthStackRoute />}
    </NavigationContainer>
  );
}
