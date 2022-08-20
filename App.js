import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Home';
import MapScreen from './src/MapScreen';
const Stack = createNativeStackNavigator();
export default App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          name={'HOME'}
          initialRouteName={'HOME'}
          screenOptions={{
            fullScreenGestureEnabled: true,
            headerTitleAlign: 'center',
          }}>
          <Stack.Screen name={'Home'} component={Home} />
          <Stack.Screen name={'MapScreen'} component={MapScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
