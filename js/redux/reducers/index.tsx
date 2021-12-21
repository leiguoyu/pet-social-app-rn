import {combineReducers} from 'redux';
import {redux_state} from '../../types';

const initialState = {
  token: '',
} as redux_state;

function user(state = initialState, action: any) {
  switch (action.type) {
    case 'LOGIN':
      return {...state, token: action.token};
    case 'REGISTER':
      return {...state, token: action.token};
    default:
      return state;
  }
}

export default combineReducers({
  user,
});
