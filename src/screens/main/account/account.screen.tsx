import React from 'react';
import { useTranslation } from 'react-i18next';
import {View, StyleSheet} from 'react-native';
import ProfileSection from '../../../components/profile/ProfileSection';

const AccountScreen = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.screen}>
      <ProfileSection screen={t('common:account')} />
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

export default AccountScreen;
