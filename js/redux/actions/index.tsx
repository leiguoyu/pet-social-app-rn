import {Dispatch} from 'redux';
import * as types from '~/js/redux/constants/action_types';
import {api} from '~/js/api';

const login = (data: object) => (dispatch: Dispatch) => {
  dispatch({
    type: types.LOGIN,
    token: 'xxxxxxx',
  });
  api.user.login(data).then((res: any) => {
    res.token &&
      dispatch({
        type: types.LOGIN,
        token: res.token,
      });
  });
};

export {login};
