import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from './js/redux/store';
import AppNavigator from './js/navigation/AppNavigator';
import {api} from '@/api';
import './js/config/theme';

debugger;
api.user.getUserInfo((data: any) => {
  console.log(data);
});

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
