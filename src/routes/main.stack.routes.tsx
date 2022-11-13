import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';
import LogoHeader from '../components/LogoHeader';

const { Navigator, Screen } = createStackNavigator();

export default function MainStackRoutes() {
  return (
    <Navigator>
      <Screen
        options={{
          header: () => <LogoHeader />,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Screen
        options={{
          header: () => <LogoHeader showBackButton />,
        }}
        name="Details"
        component={DetailsScreen}
      />
    </Navigator>
  );
}
