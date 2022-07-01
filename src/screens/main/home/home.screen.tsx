import React from 'react';
import {View, StyleSheet} from 'react-native';
import RepositoryList from '../../../components/repository/list';

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <RepositoryList />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 8,
  },
});

export default HomeScreen;
