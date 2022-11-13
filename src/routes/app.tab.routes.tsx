import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainStackRoutes from './main.stack.routes';
import FavouritesScreen from '../screens/Favourites';
import { useTheme } from 'styled-components';
import { Text } from 'react-native';

import HomeIcon from '../assets/images/home.svg';
import HomeFilledIcon from '../assets/images/homeFilled.svg';
import HeartIcon from '../assets/images/heart.svg';
import { RFValue } from 'react-native-responsive-fontsize';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: 'black',
        },
      }}
    >
      <Screen
        name="MainRoutes"
        component={MainStackRoutes}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontFamily: focused ? theme.fonts.bold : theme.fonts.thin,
                color: theme.colors.text,
                fontSize: theme.responsive.value(14),
              }}
            >
              Home
            </Text>
          ),
          tabBarIcon: ({ focused }) =>
            focused ? (
              <HomeFilledIcon width={RFValue(20)} height={RFValue(20)} />
            ) : (
              <HomeIcon width={RFValue(20)} height={RFValue(20)} />
            ),
        }}
      />
      <Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontFamily: focused ? theme.fonts.bold : theme.fonts.thin,
                color: theme.colors.text,
                fontSize: theme.responsive.value(14),
              }}
            >
              Favourites
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <HeartIcon
              width={RFValue(20)}
              height={RFValue(20)}
              fill={focused ? theme.colors.red : 'transparent'}
            />
          ),
        }}
      />
    </Navigator>
  );
}
