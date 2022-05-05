const { serve } = require('esbuild');
const express = require('express'); 
const { json } = require('stream/consumers');
const router = express.Router(); 
const url = require('url'); 
const { rolePermissions } = require('./user.db');

module.exports = (server) => {
    /**
     * 登录， 直接返回相关信息， 存到浏览器缓存中
     */
    router.post("/login", (req,res, next) => {
        let tokens = server.db.getState().tokens; 
        let users = server.db.getState().users; 

        let username = req.body.username
        let password = req.body.password
        let user = users.find(user => user.name === username && password == 123)
        if(user) {
            return res.json(tokens.find(t => t.username == user.name))
        }
        return res.status(401).json(server.db.getState().loginFailed)
    })

    /**
     * logout
     */
    router.post('/logout', (req, res, next) => {
        return res.json(server.db.getState().success)
    })

    /**
     * 获取用户信息 
     */
    router.post('/userInfo', (req, res, next) => {
        let username = req.body.username; 
        let users = server.db.getState().users; 
        let user = users.find(u => u.name === username)
        return res.json(user)
    })

    /**
     * 获取权限, 角色信息
     */
    router.post('/userPermission', (req,res,next) => {
        let username = req.body.username; 
        let users = server.db.getState().users
        let roles = server.db.getState().roles 
        let user = users.find(u => u.name === username)
        console.log(user)
        let role = roles.find(role => role.name === user.role)
        console.log(role)
        return res.json(role) 
    }), 
    /**
     * 通过搜索获取全部用户或者部分用户  
     */
    router.post('/users', (req,res,next) => {
        let username = req.body.username; 
        let users = server.db.getState().users; 

        if(username === '') {
            return res.json(users)
        }else{
            return res.json(users.filter(u => u.name.includes(username)))
        }
    })
    /**
     * 获取全部 user
     */
    router.get('/users', (req,res,next) => {
        let result; 
        let { page, limit, id } = req.query
        let users = server.db.getState().users; 
        let failed = server.db.getState().failed; 

        if(page && limit) {
            result = users.filter((_, index) => index < limit * page && index >= limit * (page - 1))
            result = {
                total: users.length,
                data: result
            }
        }else if(id) {
            result = users.find(user => user.id == id)
        }else{
            result = failed;
        }
        console.log(result)
        return res.json(result)
    })

    /**
     * 删除个别用户 
     */
    router.delete("/users", (req, res, next) => {
        let success = server.db.getState().success
        return res.json(success)
    })

    return router;
}