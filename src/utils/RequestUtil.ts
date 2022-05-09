import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";
import { ElMessage } from "element-plus";
import { clearToken, getToken } from "./LocalStorageUtil";
import { useRouter } from "vue-router";

const config: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_API_BASE_URL, 
    timeout: 60000, 
    headers: {
        'Content-Type': 'application/json' 
    }
}

const router = useRouter()
const instance: AxiosInstance = axios.create(config)

// 修改 request
instance.interceptors.request.use((config: AxiosRequestConfig):AxiosRequestConfig => {
    let token = getToken()
    if(token) {
        config.headers!.Authorization = `Bearer ${token.accessToken!}`
    }
    
    return config
}, 
(error) => {
    return Promise.reject(error)
})

// 获取 response 
instance.interceptors.response.use((response): AxiosResponse => {
    // 如果状态码是 40001， 表示登录过期， 自动跳转到登录页面 . 后端要统一处理发生异常，返回统一的状态码 ，然后前端根据状态码来进行跳转
    if(response.data.code === 40001) {
        clearToken()
        ElMessage.error("请重新登录")
        router.push({
            name: 'login'
        })
    }

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

export {
    instance
} 
