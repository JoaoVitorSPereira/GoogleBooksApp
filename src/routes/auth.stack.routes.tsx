import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/Welcome';

const { Navigator, Screen } = createStackNavigator();

export default function AuthStackRoute() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Welcome" component={WelcomeScreen} />
    </Navigator>
  );
}
