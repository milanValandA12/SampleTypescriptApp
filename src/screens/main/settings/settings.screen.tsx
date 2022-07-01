import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import ProfileSection from '../../../components/profile/ProfileSection';
import {RootStackParamList} from '../../../navigation/types/RootStackPrams';
import LocalStorageUtils from '../../../utils/LocalStorageUtils';
import {doLgout} from '../../auth/login.actions';

type authScreenProp = StackNavigationProp<RootStackParamList, 'Auth'>;

const SettingsScreen = () => {
  const navigation = useNavigation<authScreenProp>();
  const dispatch = useDispatch();

  const logout = async () => {
    dispatch(doLgout());
    await LocalStorageUtils.removeItem('username');
    navigation.replace('Auth');
  };
  return (
    <View style={styles.screen}>
      <ProfileSection screen="Settings" />
      <Button title="Logout" onPress={() => logout()} />
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

export default SettingsScreen;
