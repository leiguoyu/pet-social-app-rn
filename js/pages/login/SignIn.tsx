import * as React from 'react';
import {
  StyleSheet,
  StatusBar,
  ImageBackground,
  useColorScheme,
} from 'react-native';
import {View, Image, Button, Text} from 'react-native-ui-lib';

const SignIn = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <ImageBackground
      source={require('../../images/BG.png')}
      style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
      />
      <View style={styles.main}>
        <View center>
          <Image
            marginB-150
            style={styles.image}
            source={require('../../images/logo.png')}
          />
        </View>
        <View marginB-24>
          <Button
            text14
            label="快速登录通过FACEBOOK"
            backgroundBlue
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
        </View>
        <View marginB-45>
          <Button
            text14
            label="创建新账号"
            backgroundRed
            onPress={() => {
              navigation.navigate('SignUpStep1');
            }}
          />
        </View>
        <Text center>
          已经有帐号?
          <Text
            link
            fontBold
            onPress={() => {
              navigation.navigate('Login');
            }}>
            马上登录
          </Text>
        </Text>
      </View>
      <View style={styles.statement}>
        <Text center>
          通过签署，你将遵守我们的
          <Text link fontBold>
            服务条款
          </Text>
          ，并且已经阅读了我们的
          <Text link fontBold>
            隐私政策
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    padding: 32,
  },
  image: {
    width: 120,
    height: 148,
  },
  statement: {
    position: 'absolute',
    bottom: 0,
    padding: 32,
  },
});

export default SignIn;
