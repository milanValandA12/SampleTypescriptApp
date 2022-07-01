import React from 'react';
import {View, StyleSheet} from 'react-native';
import ProfileSection from '../../components/profile/ProfileSection';

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <ProfileSection screen="Home" />
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

export default HomeScreen;
