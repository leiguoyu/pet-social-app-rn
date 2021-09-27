import {Dispatch} from 'redux';

const increment = () => ({type: 'INCREMENT'});

const decrement = () => ({type: 'DECREMENT'});

const incrementAsync = () => (dispath: Dispatch) => {
  setTimeout(function () {
    return dispath(increment());
  }, 1000);
};

export {increment, decrement, incrementAsync};
