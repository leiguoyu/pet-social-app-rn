import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PetApp from './js/PetApp';
import store from './js/redux/store';



const App = () => {
  return (
    <Provider store={store}>
      <PetApp />
    </Provider>
  );
}





export default App; 