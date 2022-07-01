import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/main/home/home.screen';
import WishlistScreen from '../screens/main/wishlist/wishlist.screen';
import AccountScreen from '../screens/main/account/account.screen';
import SettingsScreen from '../screens/main/settings/settings.screen';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
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

export default BottomTabNavigation;
