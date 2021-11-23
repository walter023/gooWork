import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import 'intl';
import 'intl/locale-data/jsonp/en';

import { store } from 'store';

import { AppNavigator } from './routes/AppStack';

const App = () => (
  <Provider store={store}>
    <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  </Provider>
);

export default App;
