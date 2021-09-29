import * as React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, TextField, Text, Button} from 'react-native-ui-lib';

const Login = ({navigation}) => (
  <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
    <View flex paddingH-25 paddingT-120>
      <Text blue50 text20>
        欢迎回来！
      </Text>
      <TextField text50 placeholder="username" grey10 />
      <TextField text50 placeholder="password" secureTextEntry grey10 />
      <View marginT-100 center>
        <Button
          text70
          white
          background-orange30
          label="Login"
          onPress={() => {
            /* Navigate to the Home route */
            navigation.navigate('Home');
          }}
        />
        <Button link text70 orange30 label="忘记密码？" marginT-20 />
        <Text>
          还没有帐号? <Text color="#6266f9">马上注册</Text>
        </Text>
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F5FCFF',
  },
});

export default Login;
