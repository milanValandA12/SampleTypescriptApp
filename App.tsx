import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {Provider} from 'react-redux';

import RootNavigation from './src/navigation/RootNavigation';
import store from './src/redux/store';

import './src/localization/init';
import Icon from 'react-native-vector-icons/AntDesign'
Icon.loadFont();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <RootNavigation />
    </Provider>
  );
};

export default App;
