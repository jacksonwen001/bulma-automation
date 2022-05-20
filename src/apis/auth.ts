import axios from "axios";
import type { LoginData } from "./types";
/** 登录 */
export function login(data: LoginData) {
    return axios.post('/login', data)
}

/** 退出登录 */
export function logout(id: string) {
    return axios.get('/logout', { params: { id } })

}
/**
 * 判断权限是否有效
 * @param token 
 * @returns 
 */
export function isTokenValid(token: string) {
    return axios.post('/isTokenValid', {
        token 
    })
}

/**
 * 获取用户权限 
 * @param username 
 * @returns 
 */
export function getPermissions(username: string) {
    return axios.post('/user/permissions', { username })
}