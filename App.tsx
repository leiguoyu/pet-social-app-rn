import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from '~/js/redux/store';
import AppNavigator from '~/js/navigation/AppNavigator';
import {api} from '~/js/api';
import './js/config/theme';
import '~/js/mock/mock';
api.user
  .getUserInfo({
    user_id: '1111',
  })
  .then(data => {
    console.log(data);
  });

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
