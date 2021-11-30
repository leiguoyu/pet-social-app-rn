import * as React from 'react';
import {StyleSheet, StatusBar, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Colors,
  View,
  Avatar,
  Assets,
  Card,
  Text,
  Button,
} from 'react-native-ui-lib';
import {p2d} from '~/js/utils/tools';
// import _ from 'lodash';

Assets.loadAssetsGroup('icons', {
  ic_msg: require('~/js/images/ic_msg.png'),
  ic_shape: require('~/js/images/Shape.png'),
  avatar_img: require('~/js/images/avatar_img.png'),
  dyna_img: require('~/js/images/img_post.png'),
  ic_post_option: require('~/js/images/ic_post_option.png'),
  ic_bookmark: require('~/js/images/Bookmark.png'),
});
const avatar_img = require('~/js/images/avatar_img.png');
// const dyna_img = require('~/js/images/img_post.png');
const user_avatar = (info: any) => {
  console.log(info);
  const onAvatarPress = (item: any) => {
    console.log(item);
  };
  // if (info.index === 0) {
  // }
  return (
    <Avatar
      containerStyle={
        info.index === 0 ? styles.avatar_first_child : styles.avatar_child
      }
      {...info.item}
      onPress={() => onAvatarPress(info.item)}
    />
  );
};

let dynamic_info = [
  {
    coverImage: Assets.icons.dyna_img,
    title: '11',
    status: '22',
    timestamp: '33',
    description: '44',
    likes: '55',
  },
  {
    coverImage: Assets.icons.dyna_img,
    title: '11',
    status: '22',
    timestamp: '33',
    description: '44',
    likes: '55',
  },
  {
    coverImage: Assets.icons.dyna_img,
    title: '11',
    status: '22',
    timestamp: '33',
    description: '44',
    likes: '55',
  },
  {
    coverImage: Assets.icons.dyna_img,
    title: '11',
    status: '22',
    timestamp: '33',
    description: '44',
    likes: '55',
  },
  {
    coverImage: Assets.icons.dyna_img,
    title: '11',
    status: '22',
    timestamp: '33',
    description: '44',
    likes: '55',
  },
];

const renderDynamicCard = (info: any) => (
  <Card
    key={info.index}
    borderRadius={0}
    enableShadow={false}
    style={{marginBottom: 15}}
    onPress={() => console.log('press on a card')}>
    <View flex spread row paddingL-16 paddingR-16 paddingB-9>
      <View row>
        <Avatar
          size={32}
          imageSource={avatar_img}
          onPress={() => console.log('press on a card')}
        />
        <View paddingL-16>
          <Text font-14>Annie</Text>
          <Text font-12 colorGreyLight>
            洛杉矶
          </Text>
        </View>
      </View>
      <Button
        linkColor="#1d1e2c"
        link
        iconSource={Assets.icons.ic_post_option}
      />
    </View>
    <Card.Section
      imageSource={info.item.coverImage}
      imageStyle={{height: 340, width: '100%'}}
    />
    <View paddingR-16 paddingL-16 paddingT-9>
      <View flex spread row>
        <View row marginL-0>
          <Button
            link
            linkColor="#1d1e2c"
            iconSource={Assets.icons.ic_shape}
            label="2500"
            labelStyle={{color: '#1d1e2c'}}
          />
          <Button
            style={{marginLeft: 38}}
            link
            linkColor="#1d1e2c"
            iconSource={Assets.icons.ic_msg}
            label="425"
            labelStyle={{color: '#1d1e2c'}}
          />
        </View>
        <Button
          link
          linkColor="#1d1e2c"
          iconSource={Assets.icons.ic_bookmark}
        />
      </View>
      <View marginT-13>
        <Text font-14>我的女儿和她的小宠物狗，你们觉得它好看吗? </Text>
      </View>
      <View marginT-13>
        <Text font-10 colorGreyLight>
          5分钟前
        </Text>
      </View>
    </View>
  </Card>
);

const renderFriendList = () => (
  <FlatList
    showsHorizontalScrollIndicator={false}
    horizontal={true}
    data={user_info}
    renderItem={user_avatar}
  />
);

var user_info = [
  {
    title: 'Big pimple',
    size: 70,
    backgroundColor: 'red',
    imageSource: avatar_img,
    badgeProps: {size: 14, borderWidth: 0},
    badgePosition: 'TOP_LEFT',
  },
  {
    title: 'Big pimple',
    size: 70,
    backgroundColor: 'red',
    imageSource: avatar_img,
    badgeProps: {size: 14, borderWidth: 0},
    badgePosition: 'TOP_LEFT',
  },
  {
    title: 'Big pimple',
    size: 70,
    backgroundColor: 'red',
    imageSource: avatar_img,
    badgeProps: {size: 14, borderWidth: 0},
    badgePosition: 'TOP_LEFT',
  },
  {
    title: 'Big pimple',
    size: 70,
    backgroundColor: 'red',
    imageSource: avatar_img,
    badgeProps: {size: 14, borderWidth: 1},
    badgePosition: 'TOP_LEFT',
  },
  {
    title: 'Big pimple',
    size: 70,
    backgroundColor: 'red',
    imageSource: avatar_img,
    badgeProps: {size: 14, borderWidth: 1},
    badgePosition: 'TOP_LEFT',
  },
  {
    title: 'Big pimple',
    size: 70,
    backgroundColor: 'red',
    imageSource: avatar_img,
    badgeProps: {size: 14, borderWidth: 0},
    badgePosition: 'TOP_LEFT',
  },
  {
    title: 'Big pimple',
    size: 70,
    backgroundColor: 'red',
    imageSource: avatar_img,
    badgeProps: {size: 14, borderWidth: 0},
    badgePosition: 'TOP_LEFT',
  },
];
const Dynamic = ({navigation}) => (
  <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
    <StatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
    <View>
      <FlatList
        ListHeaderComponent={renderFriendList}
        ListHeaderComponentStyle={styles.frend_list}
        showsVerticalScrollIndicator={false}
        data={dynamic_info}
        renderItem={renderDynamicCard}
      />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 0,
    backgroundColor: '#fff',
  },
  frend_list: {
    marginTop: p2d(24),
    marginBottom: p2d(24),
  },
  avatar_child: {
    marginRight: p2d(48),
  },
  avatar_first_child: {
    marginLeft: p2d(32),
    marginRight: p2d(48),
  },
  dynamic_list: {
    marginTop: p2d(32),
  },
});

export default Dynamic;
