import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SignIn from '../pages/login/SignIn';
import Login from '../pages/login/Login';
import Home from '../pages/Home';
import Sample from '../pages/Sample';
import SampleDetails from '../pages/SampleDetails';

// 取redux
let user_token = 'xxsw231w';
const Stack = createNativeStackNavigator();
const no_token_page_JSX = (
  <>
    <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        title: '',
      }}
    />
  </>
);
const token_page_JSX = (
  <>
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
  </>
);

const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName={!user_token ? 'Login' : 'Home'}
    screenOptions={{
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#1d1e2c',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#1d1e2c',
      },
    }}>
    {!user_token ? no_token_page_JSX : token_page_JSX}
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
