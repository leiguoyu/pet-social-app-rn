let queryString: any = require('query-string');
import {fetchInterceptor} from './fetch_interceptor';
import {Platform} from 'react-native';
import {network} from '~/js/utils/net.config';

/**
 * @description: 枚举request请求的method方法
 * @param {type} 枚举类型
 * @return:
 */
enum HttpMethod {
  get = 'GET',
  post = 'POST',
  del = 'DELETE',
  put = 'PUT',
}

interface option {
  url: string;
  data?: object;
}

const os: any = Platform.OS;

// 请求拦截器配置
fetchInterceptor.use_request((config: any) => config);

// 响应拦截器配置
fetchInterceptor.use_response((response: any) => response);

function checkStatus(response: any) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  let error: any = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseJSON(response: any) {
  return response.json();
}

function get<P>(options: option): Promise<P> {
  if (options.data) {
    options.url += `?${queryString.stringify(options.data)}`;
  }
  try {
    return fetchInterceptor
      .c_fetch(network.api_url + options.url, {
        method: HttpMethod.get,
        headers: {
          UserAgent: os,
        },
      })
      .then<P>(checkStatus)
      .then<P>(parseJSON);
  } catch (e) {
    throw new Error('get error');
  }
}

function post<P>(options: option): Promise<P> {
  let fetch_options = {
    method: HttpMethod.post,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      UserAgent: os,
    },
    body: JSON.stringify(options.data),
  };
  return fetchInterceptor
    .c_fetch(network.api_url + options.url, fetch_options)
    .then<P>(checkStatus)
    .then<P>(parseJSON);
}

function del<P>(options: option): Promise<P> {
  if (options.data) {
    options.url += `?${queryString.stringify(options.data)}`;
  }
  let fetch_options = {
    method: HttpMethod.del,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      UserAgent: os,
    },
  };
  return fetch(network.api_url + options.url, fetch_options)
    .then<P>(checkStatus)
    .then<P>(parseJSON);
}

function update<P>(options: option): Promise<P> {
  let fetch_options = {
    method: HttpMethod.put,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      UserAgent: os,
    },
    body: JSON.stringify(options.data),
  };
  return fetch(network.api_url + options.url, fetch_options)
    .then<P>(checkStatus)
    .then<P>(parseJSON);
}

export default {
  get,
  post,
  del,
  update,
};
