import { Handler } from "../types"
import { roles, users } from "../data/userData"
import { loginFailedMessage, logoutMessage } from "../data/commonData"
import { tokens, tokenStatus } from "../data/authData"

/**
 * 登录操作
 * @param req 
 * @param res 
 * @returns 
 */
export const login: Handler = (req, res) => {
    const { username, password } = req.body 
    let t = tokens.find(t => t.username === username?.trim()) 

    if(t && password?.trim() == 123 ) {
        return res.status(200).json(t)
    }else{
        return res.status(401).json(loginFailedMessage)
    }
}

/**
 * 永远返回 true
 * @param req y
 * @param res 
 * @returns 
 */
export const isTokenValid: Handler = (req, res) => {
    return res.status(200).json(tokenStatus[0]); 
}

/**
 * 获取权限 
 * @param req 
 * @param res 
 * @returns 
 */
export const getPermissions: Handler = (req, res) => {
    let { username } = req.body; 
    let user = users.find(u => u.name === username)
    let role = roles.find(role => role.name === user?.role)
    return res.json(role) 
}

/**
 * 退出登录
 * @param req 
 * @param res 
 * @returns 
 */
export const logout: Handler = (req, res) => {
    return res.json(logoutMessage)  
}