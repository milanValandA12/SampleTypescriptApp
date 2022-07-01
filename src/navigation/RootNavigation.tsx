import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {RootStackParamList} from './types/RootStackPrams';
import LoginScreen from '../screens/auth/login.screen';
import HomeScreen from '../screens/main/home.screen';
import WishlistScreen from '../screens/main/wishlist.screen';
import AccountScreen from '../screens/main/account.screen';
import SettingsScreen from '../screens/main/settings.screen';

const Stack = createStackNavigator<RootStackParamList>();

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontWeight: '700',
          fontSize: 16,
        },
        tabBarIconStyle: {display: 'none'},
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Wish List" component={WishlistScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Auth" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
