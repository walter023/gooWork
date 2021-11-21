import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <View>
        <Text>Good work</Text>
      </View>
    </NavigationContainer>
  </SafeAreaProvider>
);

export default App;
