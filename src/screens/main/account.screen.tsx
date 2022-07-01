import React from 'react';
import {View, StyleSheet} from 'react-native';
import ProfileSection from '../../components/profile/ProfileSection';

const AccountScreen = () => {
  return (
    <View style={styles.screen}>
      <ProfileSection screen="Account" />
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
