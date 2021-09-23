import React from 'react';
import { Provider } from 'react-redux';
import store from './js/redux/store';
import AppNavigator from './js/navigation/AppNavigator';



const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}



export default App; 