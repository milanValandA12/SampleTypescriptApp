import React from 'react';
import {View, StyleSheet} from 'react-native';
import ProfileSection from '../../components/profile/ProfileSection';

const WishlistScreen = () => {
  return (
    <View style={styles.screen}>
      <ProfileSection screen="Wish list" />
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
