import settings from "@/config/settings";
import router from "@/router";
import appRoutes from "@/router/projects";
import { useMenuStore, useRoleStore, useUserStore } from "@/stores";
import { getToken } from "@/utils/LocalStorageUtil";
import { setRouteEmitter } from "@/utils/RouterListener";

/**
 * 全局的权限守护函数 
 *  如果本地没有 token， 直接跳过，不处理
 *  如果本地有 token， 设置全局的 user 信息 和 角色 信息
 * @returns 
 */
router.beforeEach(async (to, from, next) => {
    // 获取当前路径 
    let path = to.path

    // 如果路径存在于白名单， 也就是无需进行检验 
    if (settings.whiteUrlList.includes(path)) {
        return next()
    }
    // 路径需要检验. 如果 token 不存在， 跳转到登录页面   
    const token = getToken()
    if (!token) {
        return next({
            name: 'login',
            query: { redirect: to.path },
            replace: true
        })
    }

    // token 存在的情况， 因为全局已经请求了用户信息和权限信息， 所以可以直接用

    // 当用户已经登录，但是请求 login 时，自动跳转到首页
    if (path === '/login') {
        return next({
            name: 'dashboard'
        })
    }

    const userStore = useUserStore()
    const roleStore = useRoleStore() 
    const role = roleStore.role; 
    if(!role.name){
        await roleStore.getPermission(token.username!)
    }
    
    // console.log(role.permissions)

    // 没有权限， 统一跳转到 403 页面。从安全层面上也要这么做， 防止路径遍历猜测 
    if (role?.permissions?.includes(to.meta.permission!)) {
        const menuStore = useMenuStore()
        const allMenus = menuStore.getMenus(appRoutes, role.permissions)
        menuStore.setMenus(allMenus)
        
        console.log("========= 展示 to =========")
        console.log(to)
        console.log("========展示结束========")
        setRouteEmitter(to)
        return next()
    } else {
        return next({
            name: '403'
        })
    }
})