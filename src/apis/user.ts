import axios from "axios"
import type { SearchUserData } from "./types"

/**
 * 
 * @param data 获取全部user
 * @returns 
 */
export function getUsers(params: { page?: number, limit?: number, id?: string }) {
    return axios.get('/users', {
        params
    })
}
/**
 * 通过搜索得到 user
 * @param data 
 * @returns 
 */
export function getUsersBySearch(data: SearchUserData, limit?: number) {
    return axios.post('/users', data, { params: { limit } })
}

/**
 * 获取用户信息
 * @param username 
 * @returns 
 */
export function getUserInfo(id: string) {
    return axios.get('/users', {
        params: { id }
    })
}