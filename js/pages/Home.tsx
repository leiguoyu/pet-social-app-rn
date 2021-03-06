import * as React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Assets, View, Button, Text} from 'react-native-ui-lib';
import Dynamic from './tabs/Dynamic';
import Profile from './tabs/Profile';
import Notifications from './tabs/Notifications';
import Bell from './tabs/Bell';
import Me from './tabs/Me';
import {p2d} from '~/js/utils/tools';
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

Assets.loadAssetsGroup('icons', {
  ic_menu: require('~/js/images/ic_menu.png'),
  search_icon: require('~/js/images/ic_search_24.png'),
  ic_tab_newsfeed_active: require('~/js/images/ic_tab_newsfeed_active.png'),
  ic_tab_activity: require('~/js/images/ic_tab_activity.png'),
  ic_tab_add_post: require('~/js/images/ic_tab_add_post.png'),
  ic_tab_notification: require('~/js/images/ic_tab_notification.png'),
  Icons_24pt_ic_tab_profile: require('~/js/images/Icons_24pt_ic_tab_profile.png'),
  drawer_bg: require('~/js/images/drawer_bg.png'),
});

const DynamicTab = () => (
  <Tab.Navigator
    initialRouteName="Dynamic"
    screenOptions={{
      tabBarActiveTintColor: '#e91e63',
    }}>
    <Tab.Screen
      name="Dynamic"
      component={Dynamic}
      options={{
        tabBarShowLabel: false,
        tabBarIcon: () => <Image assetName="ic_tab_newsfeed_active" />,
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Notification"
      component={Notifications}
      options={{
        tabBarShowLabel: false,
        tabBarIcon: () => <Image assetName="ic_tab_activity" />,
        tabBarActiveTintColor: '#e91e63',
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarShowLabel: false,
        tabBarIcon: () => <Image assetName="ic_tab_add_post" />,
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Bell"
      component={Bell}
      options={{
        tabBarShowLabel: false,
        tabBarIcon: () => <Image assetName="ic_tab_notification" />,
        headerShown: false,
        tabBarBadge: 3,
      }}
    />
    <Tab.Screen
      name="Me"
      component={Me}
      options={{
        tabBarShowLabel: false,
        tabBarIcon: () => <Image assetName="Icons_24pt_ic_tab_profile" />,
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

const Home = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerContent={props => (
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <ImageBackground
          source={Assets.icons.drawer_bg}
          style={{height: '100%'}}>
          <DrawerItemList {...props} />
        </ImageBackground>
      </SafeAreaView>
    )}
    screenOptions={({navigation}) => ({
      headerTitle: 'New Dynamic',
      headerShown: true,
      headerTitleAlign: 'center',
      headerStyle: {
        height: p2d(88), // Specify the height of your custom header
      },
      headerLeft: () => (
        <View style={styles.menu_wrap}>
          <Button
            link
            linkColor="#1d1e2c"
            iconSource={Assets.icons.ic_menu}
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
        </View>
      ),
      headerRight: () => (
        <View style={styles.search_wrap}>
          <Image style={styles.search_icon} assetName="search_icon" />
        </View>
      ),
    })}>
    <Drawer.Screen name="Home" component={DynamicTab} />
  </Drawer.Navigator>
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
