import React from 'react';
import { Provider } from 'react-redux';

import { View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';

import { styles } from './styles';
import { THEME } from './constants/theme';

import AppNavigator from './navigation';
import store from './store'


const App = () => {
  const [ loaded ] = useFonts({
    'Poppins-BoldItalic': require('../assets/fonts/Poppins-BoldItalic.ttf'),
    'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-ExtraLight': require('../assets/fonts/Poppins-ExtraLight.ttf'),
    'Poppins-Italic': require('../assets/fonts/Poppins-Italic.ttf'),
    'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Thin': require('../assets/fonts/Poppins-Thin.ttf'),
  });

  if(!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={THEME.colors.backgroundDark}/>
      </View>
    )
  }
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  )
}

export default App;
