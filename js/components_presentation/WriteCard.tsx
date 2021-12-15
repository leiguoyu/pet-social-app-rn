import React, {useState, useRef} from 'react';
import {Alert, StyleSheet, Animated, Easing} from 'react-native';
import {
  Colors,
  View,
  Avatar,
  Assets,
  Text,
  Card,
  Button,
} from 'react-native-ui-lib';
import {p2d, b2d} from '~/js/utils/tools';
import REGION_LIST from '~/js/dict/region';
Assets.loadAssetsGroup('icons', {
  ic_msg: require('~/js/images/ic_msg.png'),
  ic_shape: require('~/js/images/Shape.png'),
  ic_love: require('~/js/images/ic_love.png'),
  ic_bookmark_on: require('~/js/images/bookmark_on.png'),
});
interface WriteCardProps {
  pic: Array<string>;
  video: string;
  avatar: string;
  name: string;
  timestamp: number;
  description: string;
  likes: string;
  comments: string;
  is_collecting: boolean;
  is_like: boolean;
  region: number;
}

interface CustomBtnProps {
  btnType: string;
}

const LikeBtn = () => {
  const iconScaleAnim = useRef(new Animated.Value(1)).current;
  const [is_like, setIsLike] = useState(false);
  const onLike = () => {
    setIsLike(!is_like);
    Animated.sequence([
      Animated.timing(iconScaleAnim, {
        toValue: 1.4,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.spring(
        //缩小动画
        iconScaleAnim,
        {
          toValue: 1,
          useNativeDriver: true,
        },
      ),
    ]).start();
  };

  return (
    <Animated.View
      style={[
        {
          transform: [{scale: iconScaleAnim}],
        },
      ]}>
      <Button
        link
        linkColor={Colors.blackColor}
        iconSource={is_like ? Assets.icons.ic_love : Assets.icons.ic_shape}
        label={'222'}
        onPress={() => {
          onLike();
        }}
        labelStyle={{color: Colors.blackColor}}
      />
    </Animated.View>
  );
};

const CollectBtn = () => {
  const iconScaleAnim = useRef(new Animated.Value(1)).current;
  const [is_booklike, setIsLike] = useState(false);
  const onLike = () => {
    setIsLike(!is_booklike);
    Animated.sequence([
      Animated.timing(iconScaleAnim, {
        toValue: 1.2,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.spring(
        //缩小动画
        iconScaleAnim,
        {
          toValue: 1,
          useNativeDriver: true,
        },
      ),
    ]).start();
  };

  return (
    <Animated.View
      style={[
        {
          transform: [{scale: iconScaleAnim}],
        },
      ]}>
      <Button
        link
        linkColor={Colors.blackColor}
        iconSource={
          is_booklike ? Assets.icons.ic_bookmark_on : Assets.icons.ic_bookmark
        }
        label={'222'}
        onPress={() => {
          onLike();
        }}
        labelStyle={{color: Colors.blackColor}}
      />
    </Animated.View>
  );
};

const RenderWriteCard = (props: any) => {
  const {
    pic,
    video,
    avatar,
    name,
    timestamp,
    description,
    likes,
    comments,
    is_collecting,
    region,
  }: WriteCardProps = props.item;
  return (
    <Card
      key={props.index}
      borderRadius={0}
      enableShadow={false}
      marginB-15
      onPress={() => console.log('press on a card')}>
      <View flex spread row paddingL-16 paddingR-16 paddingB-9>
        <View row center>
          <Avatar
            size={32}
            source={{
              uri: avatar,
            }}
            onPress={() => console.log('press on a card')}
          />
          <View paddingL-16>
            <Text font-28>{name}</Text>
            <Text font-24 greyFont>
              {REGION_LIST[region]}
            </Text>
          </View>
        </View>
        <Button
          linkColor={Colors.blackColor}
          link
          iconSource={Assets.icons.ic_post_option}
        />
      </View>
      <Card.Section
        imageSource={{
          uri: pic[0],
        }}
        imageStyle={styles.card_img}
      />
      <View paddingR-16 paddingL-16 paddingT-9>
        <View flex spread row>
          <View row marginL-0>
            <LikeBtn />
            <Button
              marginL-38
              link
              linkColor={Colors.blackColor}
              iconSource={Assets.icons.ic_msg}
              label={comments}
              labelStyle={{color: Colors.blackColor}}
            />
          </View>
          <CollectBtn />
        </View>
        <View marginT-13>
          <Text font-28>{description}</Text>
        </View>
        <View marginT-13>
          <Text font-20 greyFont>
            15分钟前
          </Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card_img: {
    height: 340,
    width: '100%',
  },
});

export default RenderWriteCard;
