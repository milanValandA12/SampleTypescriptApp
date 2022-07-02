import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, StyleSheet, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import AppButton from '../../../components/common/Button/AppButton';
import ProfileSection from '../../../components/profile/ProfileSection';
import { AVALAILABLE_LANG_CODES } from '../../../localization/init';
import { RootStackParamList } from '../../../navigation/types/RootStackPrams';
import LocalStorageUtils from '../../../utils/LocalStorageUtils';
import { doLgout } from '../../auth/login.actions';

type authScreenProp = StackNavigationProp<RootStackParamList, 'Auth'>;

const SettingsScreen = () => {
  const navigation = useNavigation<authScreenProp>();
  const dispatch = useDispatch();
  const {t, i18n} = useTranslation();
  const selectedLngCode = i18n.language;

  const logout = async () => {
    dispatch(doLgout());
    await LocalStorageUtils.removeItem('username');
    navigation.replace('Auth');
  };
  return (
    <View style={styles.screen}>
      <ProfileSection screen={t('common:settings')} />
      <View style={styles.row}>
        {AVALAILABLE_LANG_CODES.map(code => {
          return <AppButton loading={false} title={code} textKey={code} onPress={() => {
            i18n.changeLanguage(code);
          }} />
        })}
      </View>
      <AppButton loading={false} textKey={t('common:logout')} title={t('common:logout')} onPress={() => logout()} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});

export default SettingsScreen;
