import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {View, TextField, Text, Image} from 'react-native-ui-lib';
import DialogScreen from '~/js/components_presentation/DialogScreen';

const petTypes = [
  {
    id: 0,
    type: 'dog',
    text: '狗',
    imgSrc: require('./img/Dog.png'),
  },
  {
    id: 1,
    type: 'cat',
    text: '猫',
    imgSrc: require('./img/Cat.png'),
  },
  {
    id: 2,
    type: 'rabbit',
    text: '兔子',
    imgSrc: require('./img/Bunny.png'),
  },
  {
    id: 3,
    type: 'bird',
    text: '鸟',
    imgSrc: require('./img/Bird.png'),
  },
  {
    id: 4,
    type: 'hamster',
    text: '仓鼠',
    imgSrc: require('./img/Hamster.png'),
  },
  {
    id: 5,
    type: 'other',
    text: '其它',
    imgSrc: require('./img/Other.png'),
  },
];

const AddNewPetStep2 = ({navigation}) => {
  const [visible, setVisible] = useState(false);

  const [petType, setPetType] = useState('dog');

  const showDialog = () => {
    setVisible(true);
  };

  const hideDialog = () => {
    setVisible(false);
  };

  const onConfirm = () => {
    hideDialog();
  };

  const onDismiss = () => {
    hideDialog();
  };

  const onSelectPetType = (pet_type: string) => {
    setPetType(pet_type);
    if (pet_type === 'other') {
      showDialog();
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View flex style={styles.main}>
        <View marginT-50 style={styles.form}>
          <Text style={styles.textBackground}>NEW PET</Text>
          <Text style={styles.textWelcome}>宠物类型</Text>
        </View>
        <View flex row style={styles.petTypeBox}>
          {petTypes.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                onSelectPetType(item.type);
              }}>
              <View style={styles.petTypeItem}>
                <View
                  style={[
                    styles.petType,
                    petType === item.type ? styles.selected : '',
                  ]}>
                  <Image style={styles.petTypeImage} source={item.imgSrc} />
                </View>
                <Text
                  center
                  style={petType === item.type ? styles.selectedColor : ''}>
                  {item.text}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <DialogScreen
        visible={visible}
        title="其它类型"
        onConfirm={onConfirm}
        onDismiss={onDismiss}>
        <TextField
          centered
          hideUnderline
          enableErrors={false}
          style={styles.textFiled}
        />
      </DialogScreen>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    padding: 4,
    borderWidth: 8,
    borderColor: 'transparent',
    borderRadius: 100,
  },
  petTypeImage: {
    width: 96,
    height: 96,
  },
  petTypeBox: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingLeft: 52,
    paddingRight: 52,
  },
  petTypeItem: {
    marginBottom: 23,
    // marginLeft: 56,
  },
  selected: {
    borderColor: '#fa4169',
  },
  selectedColor: {
    color: '#fa4169',
  },
  textFiled: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#6266f9',
    padding: 17,
    borderRadius: 5,
  },
});

export default AddNewPetStep2;
