import React, {useState} from 'react';
import {StatusBar, Dimensions, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import {View, Image, Text, Button} from 'react-native-ui-lib';

const {width, height} = Dimensions.get('window'); // 获取手机的宽和高

const AppIntro = ({navigation}) => {
  const [index, onChangeIndex] = React.useState(0);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      <Swiper
        dotStyle={styles.dot}
        activeDotColor="#fa4169"
        loop={false}
        autoplay={true}
        autoplayTimeout={5}
        index={index}
        onIndexChanged={index => {
          onChangeIndex(index);
        }}>
        <View style={styles.slide1}>
          <Image style={styles.image} source={require('./img/BG_1.png')} />
          <View style={styles.info}>
            <Text style={styles.title}>宠物社交应用</Text>
            <Text style={styles.description}>
              我们把来自全国各地的宠物主人和动物爱好者聚在一起！
            </Text>
          </View>
        </View>
        <View style={styles.slide2}>
          <Image style={styles.image} source={require('./img/BG_2.png')} />
          <View style={styles.info}>
            <Text style={styles.title}>展示你的宠物日常生活</Text>
            <Text style={styles.description}>
              创建你的宠物个人账户，分享日常的生活动态
            </Text>
          </View>
        </View>
        <View style={styles.slide3}>
          <Image style={styles.image} source={require('./img/BG_3.png')} />
          <View style={styles.info}>
            <Text style={styles.title}>活动行为跟踪</Text>
            <Text style={styles.description}>
              通过应用功能你可以全天24小时查看跟踪你的宠物日常行为
            </Text>
          </View>
        </View>
        <View style={styles.slide4}>
          <Image style={styles.image} source={require('./img/BG_4.png')} />
          <View style={styles.info}>
            <Text style={styles.title}>更健康，更快乐的宠物</Text>
            <Text style={styles.description}>
              在健康记录之外给你心爱的宠物最好的照顾
            </Text>
          </View>
          <Button
            label="马上进入"
            style={styles.continueBtn}
            onPress={() => {
              navigation.navigate('SignIn');
            }}
          />
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fa4169',
  },
  pagination: {
    // left: 0,
  },
  dot: {
    borderWidth: 1,
    borderColor: '#69707f',
    backgroundColor: 'transparent',
  },
  info: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 152,
    padding: 32,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 18,
  },
  description: {
    color: '#fff',
    fontSize: 14,
  },
  image: {
    width,
    height,
  },
  continueBtn: {
    position: 'absolute',
    bottom: 70,
    // right: 32,
    backgroundColor: '#fa4169',
  },
});

export default AppIntro;
