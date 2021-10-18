import * as React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Image, Button, Text} from 'react-native-ui-lib';

const SignUpComplete = ({navigation}) => (
  <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
    <ImageBackground
      source={require('../../images/bg.png')}
      style={styles.imageBackground}>
      <View style={styles.main}>
        <View center>
          <Image
            marginB-36
            style={styles.image}
            source={require('../../images/ic_success.png')}
          />
        </View>
        <Text center color="#1d1e2c" style={styles.welcome}>
          欢迎使用 Pet Lover!
        </Text>
        <View marginT-121>
          <Button
            text14
            label="完善你的个人资料"
            backgroundLightBlue
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
        </View>
        <View marginT-24 marginB-45>
          <Button
            text14
            label="添加新的宠物卡"
            backgroundRed
            onPress={() => {
              navigation.navigate('AddPet');
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
  main: {
    flex: 1,
    justifyContent: 'center',
    padding: 32,
  },
  image: {
    width: 120,
    height: 120,
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SignUpComplete;
