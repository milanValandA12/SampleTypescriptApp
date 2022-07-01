import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppButton from '../../components/common/Button/AppButton';
import AppTextInput from '../../components/common/TextInput/AppTextInput';
import AppTypography from '../../components/common/Typography/AppTypography';
import useGetUserDetails from '../../hooks/auth/useGetUserDetails';

const LoginScreen = () => {
  const {username, setUsername, getProfile, fetching} = useGetUserDetails();
  return (
    <View style={styles.screen}>
      <AppTypography>Enter Github Username</AppTypography>
      <AppTextInput
        onChangeText={text => setUsername(text)}
        placeholder="Username"
        value={username}
      />
      <AppButton title="SignIButton" textKey='Get Details' loading={fetching} onPress={getProfile} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginTop: 120,
    padding: 8,
  },
});

export default LoginScreen;
