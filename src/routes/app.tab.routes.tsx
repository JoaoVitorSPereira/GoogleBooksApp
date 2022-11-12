import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainStackRoutes from './main.stack.routes';
import FavouritesScreen from '../screens/Favourites';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  return (
    <Navigator>
      <Screen name="MainRoutes" component={MainStackRoutes} />
      <Screen name="Favourites" component={FavouritesScreen} />
    </Navigator>
  );
}
