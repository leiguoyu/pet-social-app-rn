import React, {useState} from 'react';
import {StyleSheet, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
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
import {Image, Assets, View, Button} from 'react-native-ui-lib';
import {p2d} from '~/js/utils/tools';
import AddNewPetStep3 from '../pages/addNewPet/AddNewPetStep3';

import store from '~/js/redux/store';

Assets.loadAssetsGroup('icons', {
  ic_menu: require('~/js/images/ic_menu.png'),
  search_icon: require('~/js/images/ic_search_24.png'),
});
const Drawer = createDrawerNavigator();

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
    <Stack.Screen
      name="AddNewPetStep3"
      component={AddNewPetStep3}
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

const AppNavigator = () => {
  let [user_token, TokenChange] = useState('');
  // 每天store数据发生变化，执行该钩子
  store.subscribe(() => {
    // TODO 每次state改变都会进来，待优化
    // 获取state对象
    let state: any = store.getState();
    // 更新token no_token_page_JSX
    TokenChange(state.user.token);
  });

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName={!user_token ? 'SignIn' : 'Home'}
          screenOptions={({navigation}) => ({
            drawerStyle: {
              backgroundColor: '#c6cbef',
            },
            headerTitle: 'New Dynamic',
            headerShown: true,
            headerTitleAlign: 'center',
            headerStyle: {
              height: p2d(88), // Specify the height of your custom header
            },
            headerLeft: () => (
              <View style={styles.menu_wrap}>
                <Button
                  link
                  linkColor="#1d1e2c"
                  iconSource={Assets.icons.ic_menu}
                  onPress={() => {
                    navigation.toggleDrawer();
                  }}
                />
              </View>
            ),
            headerRight: () => (
              <View style={styles.search_wrap}>
                <Image style={styles.search_icon} assetName="search_icon" />
              </View>
            ),
          })}>
          <Drawer.Screen name="Dynamic" component={Home} />
          <Drawer.Screen name="Profile" component={Sample} />
          {!user_token ? no_token_page_JSX : token_page_JSX}
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  menu_wrap: {
    marginLeft: p2d(36),
  },
  menu_icon: {
    width: p2d(40),
    height: p2d(32),
  },
  search_wrap: {
    marginRight: p2d(36),
  },
  search_icon: {
    width: p2d(40),
    height: p2d(40),
  },
});

export default AppNavigator;
