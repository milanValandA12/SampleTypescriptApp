import React, {useCallback, useEffect, useState} from 'react';
import {Button, StyleSheet, View, Alert, Text, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {useDispatch, useSelector} from 'react-redux';

import {RootStackParamList} from '../../navigation/types/RootStackPrams';
import {getProfileRequest} from './login.actions';
import {ProfileInterface} from './login.reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

type authScreenProp = StackNavigationProp<RootStackParamList, 'Auth'>;

const LoginScreen = () => {
  const [username, setUsername] = useState('');

  const navigation = useNavigation<authScreenProp>();
  const dispatch = useDispatch();
  const profileData = useSelector((state: any) => state.getProfile);
  const profileDetails: ProfileInterface = profileData?.data;
  const getProfile = () => {
    if (!username) {
      Alert.alert('Error', 'Please enter username!');
      return;
    }
    dispatch(getProfileRequest(username));
  };

  const checkExistingLoggedInUser = async () => {
    const userName: any = await AsyncStorage.getItem('username');
    if (userName) {
      dispatch(getProfileRequest(userName));
    }
  };

  const setLocalUserName = useCallback(async () => {
    await AsyncStorage.setItem('username', username);
    navigation.replace('Main');
  }, [username, navigation]);

  useEffect(() => {
    if (profileDetails?.id) {
      setLocalUserName();
    }
  }, [navigation, profileDetails?.id, setLocalUserName]);

  useEffect(() => {
    checkExistingLoggedInUser();
  }, []);

  return (
    <View style={styles.screen}>
      <Text>Github Username</Text>
      <TextInput
        onChangeText={text => setUsername(text)}
        style={styles.textInput}
      />
      <Button
        title={profileData?.fetching ? 'Please wait...' : 'Get Details'}
        onPress={() => getProfile()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginTop: 50,
    padding: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#000000',
    padding: 8,
    height: 50,
    borderRadius: 12,
    marginBottom: 12,
  },
});

export default LoginScreen;
