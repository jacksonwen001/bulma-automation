import { use } from "chai";
import { addUserSuccess, deleteUserSuccess } from "../data/commonData";
import { users } from "../data/userData";
import { Handler } from "../types";

/**
 * 获取全部用户【分页】或者根据 ID 获取单个用户 
 * @param req 
 * @param res 
 * @returns 
 */
export const getUsers : Handler = (req, res) => {
    let result; 
    let { page, limit , id} = req.query

    if(page && limit) {
        result = users.filter((_, index) => index < Number(limit) * Number(page) && index >= Number(limit) * (Number(page) - 1))
        result = {
            total: users.length,
            data: result
        }
    }else if(id) {
        result = users.find(user => user.id == Number(id))
    }else{
        return res.status(500).json({
            code: 50000, 
            message: 'Internal Error!'
        });
    }
    return res.status(200).json(result); 

}

/**
 * 搜索用户功能
 * @param req  
 * @param res 
 * @returns 
 */
export const searchUser: Handler = (req, res) => {
    const { email, username, organization, role} = req.body
    let searchedUsers = users.filter(u => u.name === username || u.email === email || u.organization === organization || u.role === role)
    return res.status(200).json(searchedUsers) 
}

/**
 * 添加用户
 * @param req 
 * @param res 
 * @returns 
 */
export const addUser: Handler = (req, res) => {
    users.push(req.body)
    return res.status(201).json(addUserSuccess)
}

/**
 * 删除用户成功
 * @param req 
 * @param res 
 * @returns 
 */
export const delUser: Handler = (req, res) => {
    let { id } = req.query
    return res.status(200).json(deleteUserSuccess)
}
