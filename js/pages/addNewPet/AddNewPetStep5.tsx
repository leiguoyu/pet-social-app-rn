import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, DateTimePicker} from 'react-native-ui-lib';
import RNScrollRuler from 'react-native-scroll-ruler';
import {p2d} from '~/js/utils/tools';

const LB = 0.45359237;

const AddNewPetStep5 = ({navigation}) => {
  const [date, setDate] = useState(new Date());

  const [weight, setWeight] = useState(1);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };
  return (
    <View style={styles.container} bg-white>
      <View flex style={styles.main}>
        <View marginT-80 style={styles.form}>
          <Text style={styles.textBackground}>NEW PET</Text>
          <Text style={styles.textWelcome}>生日&体重</Text>
        </View>
        <View flexS paddingH-32>
          <DateTimePicker
            containerStyle={styles.dateTimePicker}
            title={'宠物生日是？'}
            placeholder={'Select a date'}
            mode="date"
            value={date}
            onChange={onChange}
          />
        </View>
        <View flexG paddingH-32>
          <Text center>宠物的体重是？</Text>
          <View flexG row center>
            <Text style={styles.weight}>
              {Math.round(weight / LB)}
              <Text style={styles.unit}>磅</Text>
            </Text>
          </View>
          <View flexG>
            <RNScrollRuler
              style={styles.scrollRuler}
              ref={view => {}}
              minValue={5}
              maxValue={80}
              step={1}
              num={20}
              unit={'kg'}
              defaultValue={weight}
              onSelect={value => {
                setWeight(parseInt(value));
              }}
            />
          </View>
        </View>
        <View marginB-42 paddingH-24>
          <Button
            backgroundRed
            label="完成"
            onPress={() => {
              navigation.navigate('AddNewPetStep6');
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
  dateTimePicker: {
    // backgroundColor: '#f7f7fb',
    // borderRadius: 5,
  },
  scrollRuler: {
    width: '100%',
    height: 100,
  },
  weight: {
    fontSize: 72,
    color: '#fa4169',
  },
  unit: {
    fontSize: 24,
    color: '#1d1e2c',
  },
  none: {},
});

export default AddNewPetStep5;
