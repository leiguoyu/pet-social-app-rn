import * as React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, TextField, Text, Button} from 'react-native-ui-lib';

const Login = ({navigation}) => (
  <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
    <ImageBackground
      source={require('../../images/bg.png')}
      style={styles.imageBackground}>
      <View flex style={styles.main}>
        <View marginT-50 style={styles.form}>
          <Text style={styles.textBackground}>LOGIN</Text>
          <Text style={styles.textWelcome}>欢迎回来！</Text>
          <View style={styles.textFieldBox}>
            <TextField
              title="邮箱地址"
              titleColor="#69707f"
              titleStyle={styles.textFieldTitle}
              enableErrors={false}
              hideUnderline
              style={styles.textField}
              value="lehieuds@gmail.com"
            />
          </View>
          <View style={styles.textFieldBox}>
            <TextField
              title="密码"
              titleColor="#69707f"
              titleStyle={styles.textFieldTitle}
              enableErrors={false}
              hideUnderline
              secureTextEntry
              style={styles.textField}
              value="12345678"
            />
          </View>
          <View marginT-8>
            <Button
              backgroundRed
              label="登录"
              onPress={() => {
                navigation.navigate('Home');
              }}
            />
          </View>
          <Text link fontBold marginT-20 center>
            忘记密码？
          </Text>
        </View>
        <View marginB-50>
          <Text center>
            还没有帐号?
            <Text link fontBold>
              马上注册
            </Text>
          </Text>
        </View>
      </View>
    </ImageBackground>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  main: {
    flex: 1,
    justifyContent: 'space-between',
  },
  form: {
    paddingLeft: 32,
    paddingRight: 32,
  },
  textBackground: {
    position: 'absolute',
    color: '#f7f7fb',
    fontSize: 72,
  },
  textWelcome: {
    color: '#1d1e2c',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
    marginBottom: 67,
  },
  textFieldBox: {
    backgroundColor: '#f7f7fb',
    paddingTop: 12,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 7,
    marginBottom: 24,
  },
  textFieldTitle: {
    marginBottom: 0,
  },
  textField: {
    color: '#1d1e2c',
    fontSize: 16,
  },
});

export default Login;
