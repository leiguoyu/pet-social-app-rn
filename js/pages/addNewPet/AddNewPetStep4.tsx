import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  Colors,
  Assets,
  TouchableOpacity,
  View,
  Text,
  Button,
  Image,
} from 'react-native-ui-lib';
import {p2d} from '~/js/utils/tools';

const AddNewPetStep4 = ({navigation}) => {
  const [gender, setGender] = useState('male');
  return (
    <View style={styles.container} bg-white>
      <View flex style={styles.main}>
        <View marginT-80 style={styles.form}>
          <Text style={styles.textBackground}>NEW PET</Text>
          <Text style={styles.textWelcome}>性别</Text>
        </View>
        <View row center paddingH-32>
          <TouchableOpacity
            onPress={() => {
              setGender('male');
            }}>
            <View marginH-22 marginB-27>
              <View
                style={[
                  styles.petGender,
                  gender === 'male' ? styles.selected : styles.none,
                ]}>
                <Image source={require('./img/Male.png')} />
              </View>
              <Text
                center
                color={gender === 'male' ? Colors.primaryColor : Colors.black}>
                公
              </Text>
            </View>
            <View
              abs
              absB
              style={[
                styles.arrow,
                gender === 'male' ? styles.show : styles.hide,
              ]}>
              <Image source={Assets.icons.arrow} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setGender('famale');
            }}>
            <View marginH-22 marginB-27>
              <View
                style={[
                  styles.petGender,
                  gender === 'famale' ? styles.selected : styles.none,
                ]}>
                <Image source={require('./img/Female.png')} />
              </View>
              <Text
                center
                color={
                  gender === 'famale' ? Colors.primaryColor : Colors.black
                }>
                母
              </Text>
            </View>
            <View
              abs
              absB
              style={[
                styles.arrow,
                gender === 'famale' ? styles.show : styles.hide,
              ]}>
              <Image source={Assets.icons.arrow} />
            </View>
          </TouchableOpacity>
        </View>
        <View flexG paddingH-32 style={styles.optionBackground}>
          <Text marginT-35 text70 center>
            已经绝育?
          </Text>
          <View row spread>
            <Button
              marginT-42
              backgroundLightBlue
              label="是的"
              style={styles.button}
              onPress={() => {
                navigation.navigate('AddNewPetStep5');
              }}
            />
            <Button
              marginT-42
              backgroundRed
              label="还没"
              style={styles.button}
              onPress={() => {
                navigation.navigate('AddNewPetStep5');
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
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
    marginBottom: 41,
  },
  petGender: {
    padding: 4,
    borderWidth: p2d(8),
    borderRadius: 100,
    borderColor: 'transparent',
    marginBottom: 15,
  },
  selected: {
    borderColor: '#fa4169',
  },
  optionBackground: {
    backgroundColor: '#f7f7fb',
  },
  button: {
    width: 143,
    height: 50,
  },
  arrow: {
    alignSelf: 'center',
  },
  show: {
    display: 'flex',
  },
  hide: {
    display: 'none',
  },
  none: {},
});

export default AddNewPetStep4;
