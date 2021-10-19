import * as React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, TextField, Text, Button, Image} from 'react-native-ui-lib';

const SignUpStep1 = ({navigation}) => (
  <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
    <ImageBackground
      source={require('../../images/bg.png')}
      style={styles.imageBackground}>
      <View flex style={styles.main}>
        <View marginT-50 style={styles.form}>
          <Text style={styles.textBackground}>SIGNUP</Text>
          <Text style={styles.textWelcome}>欢迎使用 Pet Lover!</Text>
          <View center>
            <Image
              marginB-36
              style={styles.avatar}
              source={require('../../images/ic_avatar_user.png')}
            />
          </View>
          <View style={styles.textFieldBox}>
            <TextField
              title="用户名"
              titleColor="#69707f"
              titleStyle={styles.textFieldTitle}
              enableErrors={false}
              hideUnderline
              style={styles.textField}
              value="Hieu Le Quang"
            />
          </View>
          <Text color="#69707f">用你的真名让你更容易得到来自我们的帮助</Text>
        </View>
        <View marginB-42 paddingL-24 paddingR-24>
          <Button
            backgroundRed
            label="继续"
            onPress={() => {
              navigation.navigate('SignUpStep2');
            }}
          />
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
  avatar: {
    width: 120,
    height: 120,
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
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#6266f9',
    borderRadius: 2,
  },
  textFieldTitle: {
    marginBottom: 0,
  },
  textField: {
    color: '#1d1e2c',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignUpStep1;
