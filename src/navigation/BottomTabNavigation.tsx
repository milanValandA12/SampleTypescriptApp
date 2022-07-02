import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/main/home/home.screen';
import WishlistScreen from '../screens/main/wishlist/wishlist.screen';
import AccountScreen from '../screens/main/account/account.screen';
import SettingsScreen from '../screens/main/settings/settings.screen';
import { useTranslation } from 'react-i18next';
import theme from '../config/constants/theme.contants';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontWeight: '700',
          fontSize: 16,
        },
        tabBarActiveTintColor: theme.primary,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarLabel: t('common:home'), title: t('common:home'), tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" color={color} size={size} />
        )
      }} />
      <Tab.Screen name="Wish List" component={WishlistScreen} options={{
        tabBarLabel: t('common:wishlist'), title: t('common:wishlist'), tabBarIcon: ({ color, size }) => (
          <AntDesign name="hearto" color={color} size={size} />
        )
      }} />
      <Tab.Screen name="Account" component={AccountScreen} options={{
        tabBarLabel: t('common:account'), title: t('common:account'), tabBarIcon: ({ color, size }) => (
          <AntDesign name="user" color={color} size={size} />
        )
      }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
        tabBarLabel: t('common:settings'), title: t('common:settings'), tabBarIcon: ({ color, size }) => (
          <AntDesign name="setting" color={color} size={size} />
        )
      }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
