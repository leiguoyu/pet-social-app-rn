import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './js/redux/store';
import Home from './js/pages/Home';
import Sample from './js/pages/Sample';
import SampleDetails from './js/pages/SampleDetails';
// import AppNavigator from './js/navigation/AppNavigator';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      {/* <AppNavigator /> */}
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#1d1e2c',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#1d1e2c'
            },
            headerShown: false
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Home',
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Sample"
            component={Sample}
            options={{
              title: 'Sample'
            }}
          />
          <Stack.Screen
            name="SampleDetails"
            component={SampleDetails}
            options={{
              title: 'SampleDetails'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}



export default App; 