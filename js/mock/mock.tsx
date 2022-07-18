import Mock from 'mockjs';
import mockFetch from 'mockjs-fetch';
import {network} from '~/js/utils/net.config';
import addUser from './api/addUser';
import login from './api/login';
import getUserInfo from './api/getUserInfo';

mockFetch(Mock);

Mock.mock(RegExp(`${network.api_url}/` + '.*'), 'get', (options: any) => {
  const reg = /\/(\w+)$|\/(\w+)(\?+.*)$/;
  let url = decodeURI(options.url);
  let rt_data = {};
  if (reg.test(url)) {
    switch (RegExp.$1 || RegExp.$2) {
      case 'getUserInfo':
        rt_data = getUserInfo;
        break;
      default:
        break;
    }
  }
  return rt_data;
});

Mock.mock(RegExp(`${network.api_url}/` + '.*'), 'post', (options: any) => {
  const reg = /\/(\w+)$|\/(\w+)(\?+.*)$/;
  let url = decodeURI(options.url);
  let rt_data = {};
  if (reg.test(url)) {
    switch (RegExp.$1 || RegExp.$2) {
      case 'addUser':
        rt_data = addUser;
        break;
      case 'login':
        rt_data = login;
        break;
      default:
        break;
    }
  }
  return rt_data;
});
