import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Login from '../pages/login/Login';
import Home from '../pages/Home';
import Sample from '../pages/Sample';
import SampleDetails from '../pages/SampleDetails';

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#1d1e2c',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#1d1e2c',
      },
      headerShown: false,
    }}>
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        title: 'Login',
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        title: 'Home',
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Sample"
      component={Sample}
      options={{
        title: 'Sample',
      }}
    />
    <Stack.Screen
      name="SampleDetails"
      component={SampleDetails}
      options={{
        title: 'SampleDetails',
      }}
    />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  </SafeAreaProvider>
);

export default AppNavigator;
