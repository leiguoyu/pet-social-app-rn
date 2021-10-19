import * as React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, TextField, Text, Button, Image} from 'react-native-ui-lib';

const AddNewPetStep2 = ({navigation}) => (
  <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
    <ImageBackground
      source={require('../../images/bg.png')}
      style={styles.imageBackground}>
      <View flex style={styles.main}>
        <View marginT-50 style={styles.form}>
          <Text style={styles.textBackground}>NEW PET</Text>
          <Text style={styles.textWelcome}>宠物类型</Text>
        </View>
        <View flex row style={styles.petTypeBox}>
          <View style={styles.petTypeItem}>
            <Image style={styles.petType} source={require('./img/Dog.png')} />
            <Text center>狗</Text>
          </View>
          <View style={styles.petTypeItem}>
            <Image style={styles.petType} source={require('./img/Cat.png')} />
            <Text center>猫</Text>
          </View>
          <View style={styles.petTypeItem}>
            <Image style={styles.petType} source={require('./img/Bunny.png')} />
            <Text center>兔子</Text>
          </View>
          <View style={styles.petTypeItem}>
            <Image style={styles.petType} source={require('./img/Bird.png')} />
            <Text center>鸟</Text>
          </View>
          <View style={styles.petTypeItem}>
            <Image
              style={styles.petType}
              source={require('./img/Hamster.png')}
            />
            <Text center>仓鼠</Text>
          </View>
          <View style={styles.petTypeItem}>
            <Image style={styles.petType} source={require('./img/Other.png')} />
            <Text center>其他</Text>
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
  petType: {
    width: 96,
    height: 96,
  },
  petTypeBox: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingLeft: 64,
    paddingRight: 64,
  },
  petTypeItem: {
    marginBottom: 34,
    // marginLeft: 56,
  },
});

export default AddNewPetStep2;
