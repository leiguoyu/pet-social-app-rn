import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Colors, View, Avatar, Assets, Text} from 'react-native-ui-lib';
import {p2d, b2d} from '~/js/utils/tools';

// 继承rnuilib - Avatar
// 扩展 1. 是否在线 2. 是否为好友 3. 是否在直播
const PetAvatar = (props: any) => {
  // 提取拓展参数
  const {is_online, is_friend, is_live, size} = props;

  const renderLiveIcon = (is_live: Boolean) => {
    if (!is_live) {
      return undefined;
    }

    return (
      <View row center style={styles.live_wrap}>
        <View />
        <View style={styles.live_dot} />
        <Text font-16 marginL-4 white>
          LIVE
        </Text>
      </View>
    );
  };

  const renderAddFriendIcon = (is_friend: Boolean) => {
    if (is_friend === true || is_friend === undefined) {
      return undefined;
    }
    return (
      <View row center style={styles.add_position}>
        <Avatar size={16} imageSource={Assets.icons.ic_add_story} />
      </View>
    );
  };

  return (
    <View
      center
      style={[
        {
          height: size + p2d(8),
          width: size + p2d(8),
        },
        is_online ? styles.online : undefined,
      ]}>
      <Avatar {...props} />
      {renderLiveIcon(is_live)}
      {renderAddFriendIcon(is_friend)}
    </View>
  );
};

const styles = StyleSheet.create({
  online: {
    borderRadius: 100,
    borderColor: '#fa4169',
    borderWidth: b2d(4),
    borderStyle: 'solid',
    position: 'relative',
  },
  live_wrap: {
    position: 'absolute',
    bottom: -p2d(14),
    left: p2d(29),
    backgroundColor: '#fa4169',
    paddingLeft: p2d(8),
    paddingRight: p2d(8),
    borderRadius: p2d(24),
  },
  live_dot: {
    width: p2d(8),
    height: p2d(8),
    borderRadius: p2d(8),
    backgroundColor: Colors.white,
  },
  add_position: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

export default PetAvatar;
