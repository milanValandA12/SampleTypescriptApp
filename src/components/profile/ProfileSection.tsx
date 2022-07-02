import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {useSelector} from 'react-redux';
import theme from '../../config/constants/theme.contants';
import { ProfileInterface } from '../../interfaces/profile/Profile.interface';
import AppTypography from '../common/Typography/AppTypography';

interface Props {
  screen: string;
}

const ProfileSection = ({screen}: Props) => {
  const profileData = useSelector((state: any) => state.getProfile);
  const profileDetails: ProfileInterface = profileData?.data;
  return (
    <View style={styles.screen}>
      <Image
        source={{uri: profileDetails?.avatar_url}}
        style={styles.image}
        resizeMode="contain"
      />
      <AppTypography>
        {profileDetails?.login}
        {'- '} {screen}
      </AppTypography>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: theme.primary,
    marginBottom: 12,
  },
});

export default ProfileSection;
