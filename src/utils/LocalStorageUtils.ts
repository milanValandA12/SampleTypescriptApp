import AsyncStorage from '@react-native-async-storage/async-storage';

const LocalStorageUtils = {
  setItem: async (key: string, value: string): Promise<boolean> => {
    try {
      await AsyncStorage.setItem(key, String(value));
      return true;
    } catch (error) {
      return false;
    }
  },
  getItem: async (key: string): Promise<string | null> => {
    try {
      const data = await AsyncStorage.getItem(key);
      return data;
    } catch (error) {
      return null;
    }
  },
  removeItem: async (key: string): Promise<boolean> => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (error) {
      return false;
    }
  },
};

export default LocalStorageUtils;
