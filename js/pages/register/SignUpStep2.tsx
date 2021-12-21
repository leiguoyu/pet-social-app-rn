import React, {useState} from 'react';
import {StyleSheet, ImageBackground, Alert} from 'react-native';
import {View, TextField, Text, Button} from 'react-native-ui-lib';
import {p2d} from '~/js/utils/tools';

const SignUpStep2 = ({route, navigation}) => {
  const {username} = route.params;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const _onPress = () => {
    if (!email) {
      Alert.alert('邮箱不能为空！');
      return;
    }
    if (!password) {
      Alert.alert('密码不能为空！');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('两次密码输入不一致');
      return;
    }
    return;
    //  TODO: 调用api
    // 注册成功
    navigation.navigate('SignUpStep3');
  };

  return (
    <ImageBackground
      source={require('../../images/BG.png')}
      bg-white
      style={styles.container}>
      <View flex style={styles.main}>
        <View marginT-80 style={styles.form}>
          <Text style={styles.textBackground}>SIGNUP</Text>
          <Text style={styles.textWelcome}>欢迎使用</Text>
          <View style={styles.textFieldBox}>
            <TextField
              placeholder="邮箱地址"
              enableErrors={false}
              hideUnderline
              style={styles.textField}
              value={email}
              onChangeText={(text: string) => {
                setEmail(text);
              }}
            />
          </View>
          <View style={styles.textFieldBox}>
            <TextField
              placeholder="密码"
              enableErrors={false}
              hideUnderline
              secureTextEntry
              style={styles.textField}
              value={password}
              onChangeText={(text: string) => {
                setPassword(text);
              }}
            />
          </View>
          <View style={styles.textFieldBox}>
            <TextField
              placeholder="确认密码"
              enableErrors={false}
              hideUnderline
              secureTextEntry
              style={styles.textField}
              value={confirmPassword}
              onChangeText={(text: string) => {
                setConfirmPassword(text);
              }}
            />
          </View>
          <View marginT-8 marginB-24>
            <Button backgroundRed label="注册" onPress={_onPress} />
          </View>
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
    fontSize: p2d(144),
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
    paddingTop: 20,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 20,
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

export default SignUpStep2;
