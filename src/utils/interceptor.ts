import { settings } from '@/config';
import router from '@/router';
import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus';
import { getToken } from './token';

// const config: AxiosRequestConfig = {
//     baseURL: import.meta.env.VITE_API_BASE_URL,
//     timeout: 60000,
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }

// const api = axios.create(config)
if (import.meta.env.VITE_API_BASE_URL) {
    axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
}
/**
 * 请求
 */
axios.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
    if (config.url?.includes('download')) {
        config.responseType = 'blob'
    }

    const token = getToken();
    if (!token) {
        return config
    }

    if (!config.headers) {
        config.headers = {};
    }
    config.headers.Authorization = `Bearer ${token}`;

    return config
},
    (err) => {
        ElMessage.error(err)
        console.error(err);
        return Promise.reject(err);
    })

export interface HttpResponse<T = unknown> {
    status: number;
    msg: string;
    code: number;
    data: T;
}
/**
 * 返回
 */
axios.interceptors.response.use((response: AxiosResponse<HttpResponse>) => {
    // 如果状态码是 40001， 表示登录过期， 自动跳转到登录页面 . 后端要统一处理发生异常，返回统一的状态码 ，然后前端根据状态码来进行跳转
    const res = response.data
    const url = response.config.url;
    if (url?.includes('download')) {
        response.headers.responseType = 'blob'
    }
    if (settings.errorCodes.includes(res.code)) {
        ElMessage.error('登录过期，请重新登录!')
        router.push({
            name: 'login'
        })
    }

    return res;
},
    error => {
        const { response } = error
        if (response) {
            ElMessage.error(response.data.message)
        } else {
            console.error(error);
            ElMessage.error(`服务器内部异常！！！请稍后再试！`)
        }
    })




