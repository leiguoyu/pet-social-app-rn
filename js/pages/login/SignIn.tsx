import * as React from 'react';
import {
  StyleSheet,
  StatusBar,
  ImageBackground,
  useColorScheme,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Image, Button, Text} from 'react-native-ui-lib';

const SignIn = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <StatusBar
        translucent={true}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
      />
      <ImageBackground
        source={require('./image/bg.png')}
        style={styles.imageBackground}>
        <View style={styles.inside}>
          <Image
            marginB-150
            style={styles.logo}
            source={require('./image/logo.png')}
          />
          <Button
            text14
            label="快速登录通过FACEBOOK"
            backgroundBlue
            autoWidth
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
          <Button
            text14
            label="创建新账号"
            marginT-24
            marginB-45
            backgroundRed
            autoWidth
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          />
          <Text>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  inside: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 32,
  },
  logo: {
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
