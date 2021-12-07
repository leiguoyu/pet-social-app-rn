import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {
  Colors,
  TouchableOpacity,
  View,
  TextField,
  Text,
  Image,
} from 'react-native-ui-lib';
import {p2d} from '~/js/utils/tools';
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

  const [petType, setPetType] = useState('');

  const [otherTypeValue, onChangeText] = useState('');

  const showDialog = () => {
    setVisible(true);
  };

  const hideDialog = () => {
    setVisible(false);
  };

  const onConfirm = () => {
    if (!otherTypeValue) {
      return;
    }
    navigation.navigate('AddNewPetStep3', {
      petType: otherTypeValue,
    });
    hideDialog();
  };

  const onDismiss = () => {
    hideDialog();
  };

  const onSelectPetType = (id: number) => {
    setPetType(petTypes[id].type);
    // 其它
    if (id === 5) {
      showDialog();
      return;
    }
    navigation.navigate('AddNewPetStep3', {
      petType: petTypes[id].text,
    });
  };

  return (
    <View style={styles.container} bg-white>
      <View flex style={styles.main}>
        <View marginT-80 style={styles.form}>
          <Text style={styles.textBackground}>NEW PET</Text>
          <Text style={styles.textWelcome}>宠物类型</Text>
        </View>
        <ScrollView>
          <View flex row style={styles.petTypeBox}>
            {petTypes.map(item => (
              <TouchableOpacity
                key={item.id}
                onPress={() => {
                  onSelectPetType(item.id);
                }}>
                <View style={styles.petTypeItem}>
                  <View
                    style={[
                      styles.petType,
                      petType === item.type ? styles.selected : styles.none,
                    ]}>
                    <Image style={styles.petTypeImage} source={item.imgSrc} />
                  </View>
                  <Text
                    center
                    color={
                      petType === item.type ? Colors.primaryColor : Colors.black
                    }>
                    {item.text}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
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
          onChangeText={(text: string) => onChangeText(text)}
          value={otherTypeValue}
        />
      </DialogScreen>
    </View>
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
  petType: {
    padding: 4,
    borderWidth: p2d(8),
    borderColor: 'transparent',
    borderRadius: 100,
  },
  petTypeImage: {
    width: p2d(192),
    height: p2d(192),
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
    borderWidth: p2d(1),
    borderColor: '#6266f9',
    padding: 17,
    borderRadius: 5,
  },
  none: {},
});

export default AddNewPetStep2;
