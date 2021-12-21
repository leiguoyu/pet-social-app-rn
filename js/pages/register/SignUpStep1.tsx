import React, {useState} from 'react';
import {StyleSheet, ImageBackground, Alert} from 'react-native';
import {View, TextField, Text, Button, Image} from 'react-native-ui-lib';
import {p2d} from '~/js/utils/tools';

const SignUpStep1 = ({navigation}) => {
  const [username, setUsername] = useState('');

  const _onPress = () => {
    if (!username) {
      Alert.alert('用户名不能为空！');
      return;
    }
    navigation.navigate('SignUpStep2', {
      username: username,
    });
  };

  return (
    <ImageBackground
      source={require('../../images/BG.png')}
      bg-white
      style={styles.container}>
      <View flex style={styles.main}>
        <View marginT-80 paddingH-32 style={styles.form}>
          <Text style={styles.textBackground}>SIGNUP</Text>
          <Text style={styles.textWelcome}>欢迎使用 Pet Lover!</Text>
          <View center>
            <Image
              marginB-36
              style={styles.avatar}
              source={require('../../images/ic_avatar_user.png')}
            />
          </View>
          <View marginB-12 style={styles.textFieldBox}>
            <TextField
              title="用户名"
              titleColor="#69707f"
              titleStyle={styles.textFieldTitle}
              enableErrors={false}
              hideUnderline
              style={styles.textField}
              value={username}
              onChangeText={(text: string) => {
                setUsername(text);
              }}
            />
          </View>
          <Text color="#69707f">用你的真名让你更容易得到来自我们的帮助</Text>
        </View>
        <View marginB-42 paddingL-24 paddingR-24>
          <Button backgroundRed label="继续" onPress={_onPress} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    width: 120,
    height: 120,
  },
  main: {
    flex: 1,
    justifyContent: 'space-between',
  },
  form: {},
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
