import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';

const { Navigator, Screen } = createStackNavigator();

export default function MainStackRoutes() {
  return (
    <Navigator>
      <Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Screen name="Details" component={DetailsScreen} />
    </Navigator>
  );
}
