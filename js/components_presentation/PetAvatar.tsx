import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
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

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
// 配置项 1. 头像大小 2. 头像资源 3. 是否在线 4. 是否为好友 5. 是否在直播
const PetAvatar = (props: any) => {
  // 提取拓展参数
  const {is_online, is_friend, is_live} = props;

  return <Avatar {...props} />;
};

const styles = StyleSheet.create({
  red_circle: {
    height: info.item.size + p2d(8),
    width: info.item.size + p2d(8),
    borderRadius: 100,
    borderColor: '#fa4169',
    borderWidth: b2d(4),
    borderStyle: 'solid',
  },
});

export default PetAvatar;
