import {Dispatch} from 'redux';
import * as types from '~/js/redux/constants/action_types';
import {api} from '~/js/api';

const login = (data: object) => (dispatch: Dispatch) => {
  api.user.login(data).then((res: any) => {
    res.token &&
      dispatch({
        type: types.LOGIN,
        token: res.token,
      });
  });
};

const register = (data: object) => (dispatch: Dispatch) =>
  new Promise((resolve, reject) => {
    api.user
      .addUserInfo(data)
      .then((res: any) => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });

export {login, register};
