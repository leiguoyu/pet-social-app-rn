import * as React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, TextField, Text, Button, Image} from 'react-native-ui-lib';

const AddNewPetStep1 = ({navigation}) => (
  <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
    <ImageBackground
      source={require('../../images/bg.png')}
      style={styles.imageBackground}>
      <View flex style={styles.main}>
        <View marginT-50 style={styles.form}>
          <Text style={styles.textBackground}>NEW PET</Text>
          <Text style={styles.textWelcome}>宠物名&头像</Text>
          <View center>
            <Image
              marginB-36
              style={styles.avatar}
              source={require('../../images/ic_avatar_pet.png')}
            />
          </View>
          <View style={styles.textFieldBox}>
            <TextField
              placeholder="宠物名字"
              enableErrors={false}
              hideUnderline
              style={styles.textField}
            />
          </View>
        </View>
        <View marginB-42 paddingL-24 paddingR-24>
          <Button
            backgroundRed
            label="继续"
            onPress={() => {
              navigation.navigate('AddNewPetStep2');
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
    paddingTop: 20,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 20,
    marginBottom: 12,
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

export default AddNewPetStep1;