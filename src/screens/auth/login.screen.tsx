import React from 'react';
import { useTranslation } from 'react-i18next';
import {StyleSheet, View} from 'react-native';
import AppButton from '../../components/common/Button/AppButton';
import AppTextInput from '../../components/common/TextInput/AppTextInput';
import AppTypography from '../../components/common/Typography/AppTypography';
import useGetUserDetails from '../../hooks/auth/useGetUserDetails';

const LoginScreen = () => {
  const {username, setUsername, getProfile, fetching} = useGetUserDetails();
  const {t} = useTranslation();
  return (
    <View style={styles.screen}>
      <AppTypography>{t('login:form.label')}</AppTypography>
      <AppTextInput
        onChangeText={text => setUsername(text)}
        placeholder={t('login:form.label')}
        value={username}
      />
      <AppButton title="SignIButton" textKey={t('login:getDetails')} loading={fetching} onPress={getProfile} />
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
