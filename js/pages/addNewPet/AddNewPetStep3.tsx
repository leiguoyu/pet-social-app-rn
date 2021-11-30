import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SectionList,
} from 'react-native';
import {
  Assets,
  Spacings,
  View,
  TextField,
  Text,
  Button,
} from 'react-native-ui-lib';
import DialogScreen from '~/js/components_presentation/DialogScreen';

const DATA = [
  {
    title: 'A',
    data: [
      '美国猎狐犬',
      '阿费恩彼斯彻狗',
      '阿富汗猎犬',
      '艾德莱尔梗',
      '秋田',
      '阿拉斯加克利凯',
      '阿拉斯加雪橇犬',
      '美国斗牛犬',
      '美英浣熊犬',
    ],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const LEADING_ICON = {
  source: Assets.icons.search,
  style: {marginRight: Spacings.s3},
};

const AddNewPetStep3 = ({navigation}) => {
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
    <View style={styles.container} bg-white>
      <View flex style={styles.main}>
        <View marginT-50 style={styles.form}>
          <Text style={styles.textBackground}>NEWPET</Text>
          <Text style={styles.textWelcome}>犬的种类</Text>
        </View>
        <View flexG top padding-18 marginH-32 br10 style={styles.shadow}>
          <TextField
            key="centered"
            placeholder="搜索..."
            hideUnderline
            leadingIcon={LEADING_ICON}
            enableErrors={false}
          />
        </View>
        <View marginV-18 paddingH-32 right>
          <Button link text14 label="不确定" />
        </View>
        <View flexS centerV paddingH-32>
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => <Item title={item} />}
            renderSectionHeader={({section: {title}}) => (
              <Text style={styles.header}>{title}</Text>
            )}
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
    fontWeight: 'bold',
  },
  textWelcome: {
    color: '#1d1e2c',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
    marginBottom: 41,
  },
  shadow: {
    elevation: 2,
    shadowOffset: {width: 4, height: 4},
    shadowColor: 'black',
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },
  item: {
    marginVertical: 18,
  },
  header: {
    fontSize: 20,
    color: 'rgb(29,30,44)',
    marginVertical: 18,
  },
  title: {
    fontSize: 14,
    color: 'rgb(29,30,44)',
  },
});

export default AddNewPetStep3;
