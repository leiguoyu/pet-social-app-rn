import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SignUpStep1 from '../pages/register/SignUpStep1';
import SignUpStep2 from '../pages/register/SignUpStep2';
import SignUpComplete from '../pages/register/SignUpComplete';
import SignIn from '../pages/login/SignIn';
import Login from '../pages/login/Login';
import Home from '../pages/Home';
import Sample from '../pages/Sample';
import SampleDetails from '../pages/SampleDetails';
import AddNewPetStep1 from '../pages/addNewPet/AddNewPetStep1';
import AddNewPetStep2 from '../pages/addNewPet/AddNewPetStep2';

// 取redux
let user_token = '';
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
        headerShown: true, // 显示header
        headerTransparent: true, // 设置header绝对定位且背景透明
      }}
    />
    <Stack.Screen
      name="SignUpStep1"
      component={SignUpStep1}
      options={{
        title: '',
        headerShown: true, // 显示header
        headerTransparent: true, // 设置header绝对定位且背景透明
      }}
    />
    <Stack.Screen
      name="SignUpStep2"
      component={SignUpStep2}
      options={{
        title: '',
        headerShown: true, // 显示header
        headerTransparent: true, // 设置header绝对定位且背景透明
      }}
    />
    <Stack.Screen
      name="SignUpComplete"
      component={SignUpComplete}
      options={{
        headerShown: false, // 隐藏header
      }}
    />
    <Stack.Screen
      name="AddNewPetStep1"
      component={AddNewPetStep1}
      options={{
        title: '',
        headerShown: true, // 显示header
        headerTransparent: true, // 设置header绝对定位且背景透明
      }}
    />
    <Stack.Screen
      name="AddNewPetStep2"
      component={AddNewPetStep2}
      options={{
        title: '',
        headerShown: true, // 显示header
        headerTransparent: true, // 设置header绝对定位且背景透明
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
    initialRouteName={!user_token ? 'SignIn' : 'Home'}
    screenOptions={{
      headerShadowVisible: false,
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
