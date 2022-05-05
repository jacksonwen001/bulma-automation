import { Request } from "@/utils/Request";
import type { LoginData } from "./data/LoginData";
import type { SearchUserData } from "./data/SearchUser";

/**
 * @author jackson
 * @description 获取 User 信息的 API
 */
let api = new Request().getInstance() 

export function login(data: LoginData) {
    return api({
        url: "/login", 
        method: "post", 
        data
    })
}

/**
 * 登出
 */
export function logout(id:number) {
    return api({
        url: "/logout", 
        method: 'post',
        params: { id } 
    })
}

/**
 * 获取用户信息
 * @param username 
 * @returns 
 */
export function getUserInfo(username: string) {
    return api({
        url: '/userInfo', 
        method: 'post', 
        data: {username}
    })
}


/**
 * 获取用户权限 
 * @param username 
 * @returns 
 */
export function getPermission(username: string) {
    return api({
        url: '/userPermission', 
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