import http from '~/js/utils/http';

let getUserInfo, updateUserInfo, addUserInfo, delUserInfo, login;

getUserInfo = (data: any) =>
  http.get({
    url: '/getUserInfo',
    data: data,
  });

updateUserInfo = (data: any) =>
  http.post({
    url: '/updateUser',
    data: data,
  });

addUserInfo = (data: any) =>
  http.post({
    url: '/addUser',
    data: data,
  });

delUserInfo = (data: any) =>
  http.post({
    url: '/delUser',
    data: data,
  });

login = (data: any) =>
  http.post({
    url: '/login',
    data: data,
  });

export let user = {
  getUserInfo,
  updateUserInfo,
  addUserInfo,
  delUserInfo,
  login,
};
