import {combineReducers} from 'redux';
import {redux_state} from '../../types';

const initialState = {
  token: '',
} as redux_state;

function user(state = initialState, action: any) {
  debugger;
  switch (action.type) {
    case 'TOKEN':
      return {...state, value: state.token + 1};
    default:
      return state;
  }
}

export default combineReducers({
  user,
});
