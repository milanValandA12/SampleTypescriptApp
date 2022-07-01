import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import {useDispatch, useSelector} from "react-redux";
import { ProfileInterface } from "../../interfaces/profile/Profile.interface";
import {RootStackParamList} from "../../navigation/types/RootStackPrams";
import { getProfileRequest } from "../../screens/auth/login.actions";
import LocalStorageUtils from "../../utils/LocalStorageUtils";

type authScreenProp = StackNavigationProp<RootStackParamList, 'Auth'>;


const useGetUserDetails = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation<authScreenProp>();
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
    const userName: any = await LocalStorageUtils.getItem('username');
    if (userName) {
      dispatch(getProfileRequest(userName));
    }
  };

  const setLocalUserName = useCallback(async () => {
    await LocalStorageUtils.setItem('username', username);
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

  return {username, setUsername, getProfile, fetching: profileData?.fetching};
};

export default useGetUserDetails;
