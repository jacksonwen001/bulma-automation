import router from '@/router'
import { menuStore, roleStore, userStore } from '@/stores'
import { getToken, setMenus } from '@/utils/session'
import { ElMenu, ElMessage } from 'element-plus'
import { getMenusByPermission } from './url'

/**
 * 创建白名单 
 */
export const whitelist = [
    '/register', 
    '/test', 
    '/404', 
    '/403', 
    '/401', 
    '/500'
]

/**
 * 前置路由 
 */
router.beforeEach(async (to, from, next) => {
    // 获取当前路径 
    let path = to.path 
    // 如果是白名单路由， 直接下一步 
    if(whitelist.includes(path)) {
        return next() 
    }

    // 获取 token 
    let token = getToken()

    if(token) {
        // 如果登录了再次访问 login 页面 
        if(path === '/login') {
            return next({ name: 'dashboard'})
        }

        // 鉴权， 判断是否有权利访问该页面。 
        if(path !== '/login') {
            // 获取角色信息
            let role = roleStore()
            if(!role.roleInfo.name){
                await role.getUserPermission(token.username!)
            }
            // 获取用户信息
            let user = userStore()
            if(!user.name) {
                await user.getUserInfo(token.username!)
            }
            
            if(role.roleInfo.permissions?.includes(to.meta.permission)){
                menuStore().setMenusInStore(getMenusByPermission(role.permissions))
                return next()
            }else {
                // 没有权限或者不存在的路由，通通转到 403 页面 。 防止路径遍历漏洞 
                return next({
                    name: '403'
                })
            }
        }

    }else{
        // 没有登录，先登录后返回访问的页面
        if(path !== '/login') {
            return next({
                name: 'login', 
                query: { redirect: to.path }, 
                replace: true
            })
        }else{
            return next() 
        }
    }    
})
