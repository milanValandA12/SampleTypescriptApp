import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import AppButton from '../../components/common/Button/AppButton';
import AppTextInput from '../../components/common/TextInput/AppTextInput';
import AppTypography from '../../components/common/Typography/AppTypography';
import useGetUserDetails from '../../hooks/auth/useGetUserDetails';

const LoginScreen = () => {
  const {username, setUsername, getProfile, fetching} = useGetUserDetails();
  return (
    <View style={styles.screen}>
      <AppTypography>githubUsername</AppTypography>
      <AppTextInput
        onChangeText={text => setUsername(text)}
        placeholder="username"
        value={username}
      />
      <AppButton title="SignIButton" textKey='getDetails' loading={fetching} onPress={getProfile} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginTop: 50,
    padding: 8,
  },
});

export default LoginScreen;
