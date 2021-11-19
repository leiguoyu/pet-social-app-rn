import * as React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dynamic from './tabs/Dynamic';
import Profile from './tabs/Profile';
import Notifications from './tabs/Notifications';
import {Image, Assets, View} from 'react-native-ui-lib';
import {p2d} from '~/js/utils/tools';
const Tab = createBottomTabNavigator();

Assets.loadAssetsGroup('icons', {
  ic_menu: require('../images/ic_menu.png'),
  search_icon: require('../images/ic.png'),
});
const Home = () => (
  <Tab.Navigator initialRouteName="Dynamic" screenOptions={{}}>
    <Tab.Screen
      name="Dynamic"
      component={Dynamic}
      options={{
        headerTitle: 'New Dynamic',
        headerShown: true,
        headerTitleAlign: 'center',
        headerLeft: () => (
          <View style={styles.menu_wrap}>
            <Image style={styles.menu_icon} assetName="ic_menu" />
          </View>
        ),
        headerRight: () => (
          <View style={styles.search_wrap}>
            <Image style={styles.search_icon} assetName="search_icon" />
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Notification"
      component={Notifications}
      options={{
        tabBarBadge: 3,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  menu_wrap: {
    marginLeft: p2d(36),
  },
  menu_icon: {
    width: p2d(40),
    height: p2d(32),
  },
  search_wrap: {
    marginRight: p2d(36),
  },
  search_icon: {
    width: p2d(40),
    height: p2d(40),
  },
});

export default Home;
