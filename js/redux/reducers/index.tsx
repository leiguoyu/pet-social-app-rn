import {combineReducers} from 'redux';
import {CounterState} from '../../types';

const initialState = {
  value: 0,
} as CounterState;

function counterReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, value: state.value + 1};
    case 'DECREMENT':
      return {...state, value: state.value - 1};
    default:
      return state;
  }
}

export default combineReducers({
  counter: counterReducer,
});
