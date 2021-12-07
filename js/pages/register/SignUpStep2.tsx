import * as React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {View, TextField, Text, Button} from 'react-native-ui-lib';
import {p2d} from '~/js/utils/tools';

const SignUpStep2 = ({navigation}) => (
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
          />
        </View>
        <View style={styles.textFieldBox}>
          <TextField
            placeholder="密码"
            enableErrors={false}
            hideUnderline
            secureTextEntry
            style={styles.textField}
          />
        </View>
        <View style={styles.textFieldBox}>
          <TextField
            placeholder="确认密码"
            enableErrors={false}
            hideUnderline
            secureTextEntry
            style={styles.textField}
          />
        </View>
        <View marginT-8 marginB-24>
          <Button
            backgroundRed
            label="注册"
            onPress={() => {
              navigation.navigate('SignUpComplete');
            }}
          />
        </View>
      </View>
    </View>
  </ImageBackground>
);

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
