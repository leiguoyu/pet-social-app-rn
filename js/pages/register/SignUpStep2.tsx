import * as React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, TextField, Text, Button} from 'react-native-ui-lib';

const SignUpStep2 = ({navigation}) => (
  <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
    <ImageBackground
      source={require('../../images/bg.png')}
      style={styles.imageBackground}>
      <View flex style={styles.main}>
        <View marginT-50 style={styles.form}>
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
  header: {},
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
