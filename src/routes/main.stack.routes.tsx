import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';

const { Navigator, Screen } = createStackNavigator();

export default function MainStackRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Details" component={DetailsScreen} />
    </Navigator>
  );
}
