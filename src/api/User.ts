import { instance as api }  from "@/utils/RequestUtil"
import type { LoginData, SearchUserData } from "./Types"

/**
 * 登录
 * @param data 
 * @returns 
 */
export function login(data: LoginData) {
    return api({
        url: "/login", 
        method: "post", 
        data
    })
}

export function isTokenValid(token: string) {
    return api({
        url: '/isTokenValid', 
        method: 'post', 
        data: {token}
    })
}

/**
 * 登出
 */
 export function logout(name: string) {
    return api({
        url: "/logout", 
        method: 'post',
        data: { name } 
    })
}

/**
 * 获取用户信息
 * @param username 
 * @returns 
 */
export function getUserInfo(id: string) {
    return api({
        url: '/users', 
        method: 'get', 
        params: {id}
    })
}

/**
 * 获取用户权限 
 * @param username 
 * @returns 
 */
export function getPermission(username: string) {
    return api({
        url: '/user/permissions', 
        method: 'post', 
        data: {username}
    })
}

/**
 * 
 * @param data 获取全部user
 * @returns 
 */
export function getUsers(params:{page?:number, limit?:number, id?:string}){
    return api({
        url: '/users', 
        method: 'get', 
        params
    })
}
/**
 * 通过搜索得到 user
 * @param data 
 * @returns 
 */
export function getUsersBySearch(data: SearchUserData){
    return api({
        url: '/users', 
        method: 'post', 
        data
    })
}