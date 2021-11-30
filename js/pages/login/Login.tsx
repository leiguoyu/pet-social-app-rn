import React, {useState} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {View, TextField, Text, Button} from 'react-native-ui-lib';
import {login} from '~/js/redux/actions/index';
import {connect} from 'react-redux';
const LoginContainer = ({navigation, login}) => {
  let [user_email, onEmailChangeText] = useState('');
  let [user_pwd, onPwdChangeText] = useState('');
  const GoLogin = () => {
    login({
      user_email,
      user_pwd,
    });
  };
  return (
    <ImageBackground
      source={require('../../images/BG.png')}
      style={styles.container}>
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
              onChangeText={(text: any) => onEmailChangeText(text)}
              value={user_email}
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
              onChangeText={(text: any) => onPwdChangeText(text)}
              value={user_pwd}
            />
          </View>
          <View marginT-8>
            <Button backgroundRed label="登录" onPress={GoLogin} />
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontWeight: 'bold',
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
// export default Login;
export default connect(null, {login})(LoginContainer);
