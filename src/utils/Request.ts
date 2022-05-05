/**
 * @author jackson
 * @description axios 请求类
 */
import axios, { type AxiosInstance,  type AxiosRequestConfig, type AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'  // 引入el 提示框，这个项目里用什么组件库这里引什么
import { getToken } from './session';
 

export class Request {
    
    private config: AxiosRequestConfig = {
        baseURL: import.meta.env.VITE_API_BASE_URL, 
        timeout: 60000, 
        headers: {
            'Content-Type': 'application/json' 
        }
    }

    private instance: AxiosInstance; 

    constructor() {
        this.instance = axios.create(this.config)
        this.instance.interceptors.request.use((config: AxiosRequestConfig):AxiosRequestConfig => {
            let token = getToken()
            if(token) {
                config.headers!.Authorization = `Bearer ${token.accessToken!}`
            }
            
            return config
        }, 
        (error) => {
            return Promise.reject(error)
        })

        this.instance.interceptors.response.use((response): AxiosResponse => {
            return response
        }, 
        error => {
            const { response } = error
            if(response) {
                ElMessage.error(response.data.message)
            }else {
                ElMessage.error("服务器内部异常！！！请稍后再试！")
            }
        })
    }

    public getInstance(): AxiosInstance {
        return this.instance
    }

}

