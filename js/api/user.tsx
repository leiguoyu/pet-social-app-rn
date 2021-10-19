import http from '~/js/utils/http';

let getUserInfo, updateUserInfo, addUserInfo, delUserInfo, login;

getUserInfo = (data: any) =>
  http.post({
    url: 'https://pet-server-9gjxcs7a1e0a4f33-1307245463.ap-shanghai.app.tcloudbase.com/koa-starter/assets/start_carousel',
    data: data.user_id,
  });

updateUserInfo = (data: any) =>
  http.update({
    url: 'user/info',
    data: data,
  });

addUserInfo = (data: any) =>
  http.post({
    url: 'user/info',
    data: data,
  });

delUserInfo = (data: any) =>
  http.del({
    url: 'user/info',
    data: data,
  });

login = (data: any) =>
  http.post({
    url: 'login',
    data: data,
  });

export let user = {
  getUserInfo,
  updateUserInfo,
  addUserInfo,
  delUserInfo,
  login,
};
