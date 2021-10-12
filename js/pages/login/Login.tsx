import * as React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, TextField, Text, Button} from 'react-native-ui-lib';

const Login = ({navigation}) => (
  <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
    <ImageBackground
      source={require('./image/bg.png')}
      style={styles.imageBackground}>
      <View flex style={styles.content}>
        <View marginT-50 style={styles.loginForm}>
          <Text style={styles.textLogin}>LOGIN</Text>
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
          <Button
            widthAuto
            backgroundRed
            marginT-8
            label="登录"
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
          <Text link fontBold marginT-20 center>
            忘记密码？
          </Text>
        </View>
        <View marginB-50 center>
          <Text>
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
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {},
  loginForm: {
    // marginTop: 50,
    paddingLeft: 32,
    paddingRight: 32,
  },
  textLogin: {
    position: 'absolute',
    color: '#f7f7fb',
    fontSize: 72,
  },
  textWelcome: {
    color: '#1d1e2c',
    fontSize: 24,
    marginTop: 48,
    marginBottom: 67,
  },
  textFieldBox: {
    backgroundColor: '#f7f7fb',
    paddingTop: 12,
    paddingLeft: 17,
    paddingRight: 17,
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
