import React from 'react';
import { useTranslation } from 'react-i18next';
import {View, StyleSheet} from 'react-native';
import ProfileSection from '../../../components/profile/ProfileSection';

const WishlistScreen = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.screen}>
      <ProfileSection screen={t('common:wishlist')} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WishlistScreen;
