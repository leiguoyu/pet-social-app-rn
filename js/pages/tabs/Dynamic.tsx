import React, {useState} from 'react';
import {StyleSheet, StatusBar, FlatList} from 'react-native';
import {color} from 'react-native-reanimated';
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
import PetAvatar from '~/js/components_presentation/PetAvatar';
import RenderWriteCard from '~/js/components_presentation/WriteCard';
import {b2d, p2d} from '~/js/utils/tools';

Assets.loadAssetsGroup('icons', {
  ic_msg: require('~/js/images/ic_msg.png'),
  ic_shape: require('~/js/images/Shape.png'),
  avatar_img: require('~/js/images/avatar_img.png'),
  dyna_img: require('~/js/images/img_post.png'),
  ic_post_option: require('~/js/images/ic_post_option.png'),
  ic_bookmark: require('~/js/images/Bookmark.png'),
  ic_add_story: require('~/js/images/ic_add_story.png'),
});

const write_data = [
  {
    pic: [
      'https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics2.baidu.com%2Ffeed%2F4610b912c8fcc3ce969bcf08285b5e81d43f205d.jpeg',
    ],
    video: '',
    avatar: 'https://randomuser.me/api/portraits/women/24.jpg',
    name: 'Annie',
    timestamp: 123456789,
    description: '我的女儿和她的宠物狗，你们觉得它好看吗？',
    likes: 2500,
    comments: 225,
    is_like: true,
    is_collecting: false,
    region: 1,
  },
  {
    pic: [
      'https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics2.baidu.com%2Ffeed%2F4610b912c8fcc3ce969bcf08285b5e81d43f205d.jpeg',
    ],
    video: '',
    avatar: 'https://randomuser.me/api/portraits/women/24.jpg',
    name: 'Annie',
    timestamp: 123456789,
    description: '我的女儿和她的宠物狗，你们觉得它好看吗？',
    likes: 2500,
    comments: 425,
    is_collecting: true,
    is_like: true,
    region: 1,
  },
  {
    pic: [
      'https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics2.baidu.com%2Ffeed%2F4610b912c8fcc3ce969bcf08285b5e81d43f205d.jpeg',
    ],
    video: '',
    avatar: 'https://randomuser.me/api/portraits/women/24.jpg',
    name: 'Annie',
    timestamp: 123456789,
    description: '我的女儿和她的宠物狗，你们觉得它好看吗？',
    likes: 2500,
    comments: 425,
    is_collecting: true,
    is_like: true,
    region: 1,
  },
  {
    pic: [
      'https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics2.baidu.com%2Ffeed%2F4610b912c8fcc3ce969bcf08285b5e81d43f205d.jpeg',
    ],
    video: '',
    avatar: 'https://randomuser.me/api/portraits/women/24.jpg',
    name: 'Annie',
    timestamp: 123456789,
    description: '我的女儿和她的宠物狗，你们觉得它好看吗？',
    likes: 2500,
    comments: 425,
    is_collecting: true,
    is_like: true,
    region: 1,
  },
  {
    pic: [
      'https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics2.baidu.com%2Ffeed%2F4610b912c8fcc3ce969bcf08285b5e81d43f205d.jpeg',
    ],
    video: '',
    avatar: 'https://randomuser.me/api/portraits/women/24.jpg',
    name: 'Annie',
    timestamp: 123456789,
    description: '我的女儿和她的宠物狗，你们觉得它好看吗？',
    likes: 2500,
    comments: 425,
    is_collecting: true,
    is_like: true,
    region: 1,
  },
];

const user_info = [
  {
    size: p2d(112),
    source: {
      uri: 'https://randomuser.me/api/portraits/women/24.jpg',
    },
    is_friend: false,
    is_online: true,
  },
  {
    size: p2d(112),
    source: {
      uri: 'https://randomuser.me/api/portraits/women/24.jpg',
    },
    is_online: true,
    is_live: true,
  },
  {
    size: p2d(112),
    source: {
      uri: 'https://randomuser.me/api/portraits/women/24.jpg',
    },
  },
  {
    size: p2d(112),
    source: {
      uri: 'https://randomuser.me/api/portraits/women/24.jpg',
    },
  },
  {
    size: p2d(112),
    source: {
      uri: 'https://randomuser.me/api/portraits/women/24.jpg',
    },
    is_online: true,
  },
  {
    size: p2d(112),
    source: {
      uri: 'https://randomuser.me/api/portraits/women/24.jpg',
    },
  },
  {
    size: p2d(112),
    source: {
      uri: 'https://randomuser.me/api/portraits/women/24.jpg',
    },
  },
];

const RenderFriendList = () => (
  <FlatList
    showsHorizontalScrollIndicator={false}
    horizontal={true}
    data={user_info}
    renderItem={UserAvatar}
  />
);

const UserAvatar = (info: any) => {
  const onAvatarPress = (item: any) => {};
  // const [isEnabled, setIsEnabled] = useState('');
  return (
    <View
      centerH
      style={[
        info.index === 0 ? styles.avatar_first_child : styles.avatar_child,
      ]}>
      <View>
        <PetAvatar
          backgroundColor="#ffffff"
          animate={true}
          {...info.item}
          onPress={() => onAvatarPress(info.item)}
        />
      </View>
      <Text marginT-6 font-24 fontBlack>
        Andy
      </Text>
    </View>
  );
};

const Dynamic = ({navigation}) => (
  <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
    <StatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
    <View>
      <FlatList
        ListHeaderComponent={RenderFriendList}
        ListHeaderComponentStyle={styles.frend_list}
        showsVerticalScrollIndicator={false}
        data={write_data}
        renderItem={RenderWriteCard}
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
