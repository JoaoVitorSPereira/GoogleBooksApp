import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainStackRoutes from './main.stack.routes';
import FavouritesScreen from '../screens/Favourites';
import LogoHeader from '../components/LogoHeader';
import { useTheme } from 'styled-components';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  const theme = useTheme();
  return (
    <Navigator>
      <Screen
        name="MainRoutes"
        component={MainStackRoutes}
        options={{
          header: () => <LogoHeader />,
        }}
      />
      <Screen name="Favourites" component={FavouritesScreen} />
    </Navigator>
  );
}
