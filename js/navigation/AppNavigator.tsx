import React, {Component, useState} from 'react';
import {AsyncStorage, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppIntro from '../pages/appIntro/AppIntro';
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
import {Image, Assets, View, Button} from 'react-native-ui-lib';
import AddNewPetStep3 from '../pages/addNewPet/AddNewPetStep3';
import AddNewPetStep4 from '../pages/addNewPet/AddNewPetStep4';
import AddNewPetStep5 from '../pages/addNewPet/AddNewPetStep5';
import AddNewPetStep6 from '../pages/addNewPet/AddNewPetStep6';

import store from '~/js/redux/store';

Assets.loadAssetsGroup('icons', {
  ic_menu: require('~/js/images/ic_menu.png'),
  search_icon: require('~/js/images/ic_search_24.png'),
});

const Stack = createNativeStackNavigator();
const first_no_token_page_JSX = (
  <>
    <Stack.Screen
      name="AppIntro"
      component={AppIntro}
      options={{
        headerShown: false,
      }}
    />
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
    <Stack.Screen
      name="AddNewPetStep3"
      component={AddNewPetStep3}
      options={{
        title: '',
        headerShown: true, // 显示header
        headerTransparent: true, // 设置header绝对定位且背景透明
      }}
    />
    <Stack.Screen
      name="AddNewPetStep4"
      component={AddNewPetStep4}
      options={{
        title: '',
        headerShown: true, // 显示header
        headerTransparent: true, // 设置header绝对定位且背景透明
      }}
    />
    <Stack.Screen
      name="AddNewPetStep5"
      component={AddNewPetStep5}
      options={{
        title: '',
        headerShown: true, // 显示header
        headerTransparent: true, // 设置header绝对定位且背景透明
      }}
    />
    <Stack.Screen
      name="AddNewPetStep6"
      component={AddNewPetStep6}
      options={{
        title: '',
        headerShown: true, // 显示header
        headerTransparent: true, // 设置header绝对定位且背景透明
      }}
    />
  </>
);
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
    <Stack.Screen
      name="AddNewPetStep3"
      component={AddNewPetStep3}
      options={{
        title: '',
        headerShown: true, // 显示header
        headerTransparent: true, // 设置header绝对定位且背景透明
      }}
    />
    <Stack.Screen
      name="AddNewPetStep4"
      component={AddNewPetStep4}
      options={{
        title: '',
        headerShown: true, // 显示header
        headerTransparent: true, // 设置header绝对定位且背景透明
      }}
    />
    <Stack.Screen
      name="AddNewPetStep5"
      component={AddNewPetStep5}
      options={{
        title: '',
        headerShown: true, // 显示header
        headerTransparent: true, // 设置header绝对定位且背景透明
      }}
    />
    <Stack.Screen
      name="AddNewPetStep6"
      component={AddNewPetStep6}
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

// const AppNavigator = () => {
//   let [user_token, TokenChange] = useState('');
//   // 每天store数据发生变化，执行该钩子
//   store.subscribe(() => {
//     // TODO 每次state改变都会进来，待优化
//     // 获取state对象
//     let state: any = store.getState();
//     // 更新token no_token_page_JSX
//     TokenChange(state.user.token);
//   });

//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <Stack.Navigator
//           initialRouteName={!user_token ? 'AppIntro' : 'Home'}
//           screenOptions={{
//             headerShadowVisible: false,
//           }}>
//           {!user_token ? no_token_page_JSX : token_page_JSX}
//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// };

class AppNavigator extends Component {
  state = {
    user_token: '',
    noTokenPageName: 'AppIntro',
  };
  componentWillMount() {
    this.openApp();
  }
  componentDidMount() {
    store.subscribe(() => {
      // TODO 每次state改变都会进来，待优化
      // 获取state对象
      let state: any = store.getState();
      // 更新token no_token_page_JSX
      this.setState({user_token: state.user.token});
    });
  }
  openApp = () => {
    AsyncStorage.getItem('isFirstLaunch', (error, result) => {
      if (result === 'false') {
        this.setState({noTokenPageName: 'SignIn'});
      } else {
        // 存储
        AsyncStorage.setItem('isFirstLaunch', 'false');
      }
    });
  };
  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={
              !this.state.user_token ? this.state.noTokenPageName : 'Home'
            }
            screenOptions={{
              headerShadowVisible: false,
            }}>
            {!this.state.user_token
              ? this.state.noTokenPageName === 'AppIntro'
                ? first_no_token_page_JSX
                : no_token_page_JSX
              : token_page_JSX}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

export default AppNavigator;
