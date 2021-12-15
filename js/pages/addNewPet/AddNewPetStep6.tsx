import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, Image} from 'react-native-ui-lib';
import {p2d} from '~/js/utils/tools';

const AddNewPetStep6 = ({navigation}) => {
  const [date, setDate] = useState(new Date());

  return (
    <View style={styles.container} bg-white>
      <View flex style={styles.main}>
        <View marginT-80 paddingH-32>
          <Text style={styles.textBackground}>NEW PET</Text>
          <Text style={styles.textWelcome}>感应设备</Text>
        </View>
        <View flex paddingH-32>
          <Image source={require('./img/Art.png')} />
          <Text marginT-43 center>
            跟踪宠物日常活动和休息
          </Text>
          <Button
            backgroundRed
            marginT-18
            label="添加设备"
            onPress={() => {
              navigation.navigate('AddDeviceMonitor');
            }}
          />
          <Button
            link
            marginT-35
            label="稍候再说"
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
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
});

export default AddNewPetStep6;
