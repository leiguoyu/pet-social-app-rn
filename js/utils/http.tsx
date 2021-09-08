let queryString: any = require("query-string");
import { fetchInterceptor } from "./fetch_interceptor";
import {
    Platform
} from 'react-native';

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

const os: any = Platform.OS;

// 请求拦截器配置
fetchInterceptor.use_request((config:any)=>{
    return config;
});

// 响应拦截器配置
fetchInterceptor.use_response((response:any)=>{
    return response;
});

function checkStatus(response: any) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        let error: any = new Error(response.statusText)
        error.response = response
        throw error
    }
}

function parseJSON(response: any) {
    return response.json()
}

async function get<P>(url: string, params: object): Promise<P> {
    if (params) {
        url += `?${queryString.stringify(params)}`
    }
    try {
        return fetchInterceptor.c_fetch(url, {
            method: HttpMethod.get,
            headers: {
                'UserAgent': os
            }
        })
        .then<P>(checkStatus)
        .then<P>(parseJSON)
    } catch (e) {
        throw new Error('get error')
    }

}

function post<P>(url: string, body: object): Promise<P> {
    let fetch_options = {
        method: HttpMethod.post,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'UserAgent': os
        },
        body: JSON.stringify(body)
    }
    return fetchInterceptor.c_fetch(url, fetch_options)
        .then<P>(checkStatus)
        .then<P>(parseJSON)
}

function del<P>(url: string, params: object): Promise<P> {
    if (params) {
        url += `?${queryString.stringify(params)}`
    }
    let fetch_options = {
        method: HttpMethod.del,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'UserAgent': os
        }
    }
    return fetch(url, fetch_options)
        .then<P>(checkStatus)
        .then<P>(parseJSON)
}

function update<P>(url: string, body: object): Promise<P> {
    let fetch_options = {
        method: HttpMethod.put,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'UserAgent': os
        },
        body: JSON.stringify(body)
    }
    return fetch(url, fetch_options)
        .then<P>(checkStatus)
        .then<P>(parseJSON)
}


export default {
    get,
    post,
    del,
    update
}
