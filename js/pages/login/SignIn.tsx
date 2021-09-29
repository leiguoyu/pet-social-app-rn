import * as React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Image, Text, Button} from 'react-native-ui-lib';

const SignIn = ({navigation}) => (
  <View style={styles.container}>
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
    </View>
    <Image source={require('./image/bg.png')} style={styles.backgroundImage}>
      <View style={styles.loginForm}>
        <Image style={styles.logo} source={require('./image/logo.png')} />
        <Button
          text70
          white
          background-orange30
          label="快速登录通过FACEBOOK"
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
        <Button text70 orange30 label="创建新账号" marginT-20 />
        <Text>已经有帐号? 马上登录</Text>
        <Text>
          通过签署，你将遵守我们的服务条款，并且已经阅读了我们的隐私政策
        </Text>
      </View>
    </Image>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    // 祛除内部元素的白色背景
    backgroundColor: 'rgba(0,0,0,0)',
  },
  loginForm: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  logo: {
    width: 120,
    height: 148,
  },
});

export default SignIn;
