import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WhatNew from './tabs/WhatNew';
import Profile from './tabs/Profile';
import Notifications from './tabs/Notifications';



const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="WhatNew"
        component={WhatNew}
      />
      <Tab.Screen
        name="Notification"
        component={Notifications}
        options={{ tabBarBadge: 3 }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  )
}




export default Home;