import React, {useState} from 'react';
import {StyleSheet, FlatList, SectionList} from 'react-native';
import {
  Assets,
  Spacings,
  View,
  TextField,
  Text,
  Button,
} from 'react-native-ui-lib';
import _ from 'lodash';
import {p2d} from '~/js/utils/tools';

const DATA = [
  {
    title: 'A',
    data: [
      '美国猎狐犬',
      '阿费恩彼斯彻狗',
      '阿富汗猎犬',
      '艾德莱尔梗',
      '阿拉斯加克利凯',
      '阿拉斯加雪橇犬',
      '美国斗牛犬',
      '美英浣熊犬',
      '澳洲丝毛梗',
      '阿特西獵犬',
    ],
  },
  {
    title: 'B',
    data: [
      '博美犬',
      '北京犬',
      '边界牧羊犬',
      '巴哥犬',
      '布烈塔尼獵犬',
      '巴仙吉犬',
      '比利时牧羊犬',
      '布拉可犬',
    ],
  },
  {
    title: 'C',
    data: ['长须牧羊犬', '川东猎犬', '狮子狗'],
  },
  {
    title: 'D',
    data: ['德国牧羊犬', '德国笃宾犬'],
  },
];

const LEADING_ICON = {
  source: Assets.icons.search,
  style: {marginRight: Spacings.s3},
};

const getPetArray = () => {
  let array = [];
  _(DATA).forEach(function (value) {
    array = _.concat(array, value.data);
  });
  return array;
};

const PETARRAY = getPetArray();

const AddNewPetStep3 = ({route, navigation}) => {
  /*  Get the param */
  const {petType} = route.params;

  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const onChangeText = (text: string) => {
    setSearchValue(text);
    // 进行搜索
    doSearch(text);
  };

  const doSearch = (text: string) => {
    let array = [];
    for (let index = 0; index < PETARRAY.length; index++) {
      const element = PETARRAY[index];
      if (element.indexOf(text) !== -1) {
        array.push(element);
      }
    }
    setSearchResult(array);
  };

  const Item = ({title}) => (
    <View style={styles.item}>
      <Text
        style={styles.title}
        onPress={() => {
          navigation.navigate('AddNewPetStep4');
        }}>
        {title}
      </Text>
    </View>
  );

  const renderItem = ({item}) => <Item title={item} />;

  return (
    <View style={styles.container} bg-white>
      <View flex style={styles.main}>
        <View marginT-80 style={styles.form}>
          <Text style={styles.textBackground}>NEW PET</Text>
          <Text style={styles.textWelcome}>{petType}的种类</Text>
        </View>
        <View padding-18 marginH-32 br10 style={styles.searchBox}>
          <TextField
            key="centered"
            placeholder="搜索..."
            hideUnderline
            leadingIcon={LEADING_ICON}
            enableErrors={false}
            onChangeText={onChangeText}
            value={searchValue}
          />
        </View>
        <View marginV-18 paddingH-32 right>
          <Button
            link
            text14
            label="不确定"
            onPress={() => {
              navigation.navigate('AddNewPetStep4');
            }}
          />
        </View>
        <View
          flexS
          paddingH-32
          style={searchValue !== '' ? styles.hide : styles.show}>
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={renderItem}
            renderSectionHeader={({section: {title}}) => (
              <Text style={styles.header}>{title}</Text>
            )}
          />
        </View>
        <View
          flexS
          paddingH-32
          style={searchValue !== '' ? styles.show : styles.hide}>
          <Text style={styles.header}>最佳匹配</Text>
          <FlatList
            data={searchResult}
            renderItem={renderItem}
            keyExtractor={(item, index) => item + index}
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
  searchBox: {
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
  hide: {
    display: 'none',
  },
  show: {
    display: 'flex',
  },
});

export default AddNewPetStep3;
