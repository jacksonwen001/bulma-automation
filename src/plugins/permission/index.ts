import router from '@/router'
import { setRouteEmitter } from "@/utils/routerListener";
import { useMenuStore, useRoleStore, useTabStore, useUserStore } from "@/store";
import appRoutes from '@/router/routes';
import { settings } from '@/config';
import { getToken } from '@/utils/token';

router.beforeEach(async (to, from, next) => {
    
    const permissions = [
        'dashboard:index:view',
    ]
    // 获取当前路径 
    let path = to.path; 
    if(settings.whiteUrls.includes(path)){
        return next()
    }

    // 路径需要检验. 如果 token 不存在， 跳转到登录页面   
    const token = getToken()
    if (!token) {
        return next({
            name: 'Login',
            query: { redirect: to.path },
            replace: true
        })
    }

    // token 存在的情况， 因为全局已经请求了用户信息和权限信息， 所以可以直接用

    // 当用户已经登录，但是请求 login 时，自动跳转到首页
    if (path === '/login') {
        return next({
            name: 'Dashboard'
        })
    }

    const userStore = useUserStore()
    const roleStore = useRoleStore() 
    const role = roleStore.role; 
    if(!role.name){
        await roleStore.getPermission(token.username!)
    }
    console.log('pages=============')
    console.log(role?.permissions?.pages)

    // 没有权限， 统一跳转到 403 页面。从安全层面上也要这么做， 防止路径遍历猜测 
    if (role?.permissions?.pages?.includes(to.meta.permission!)) {
        const menuStore = useMenuStore()
        const allMenus = menuStore.getMenus(appRoutes, role.permissions.pages)
        menuStore.setMenus(allMenus)
        setRouteEmitter(to)
        return next()
    } else {
        return next({
            name: '403'
        })
    }

    // setRouteEmitter(to)
    // console.log(useTabStore().getCacheTabList)
    // const menuStore = useMenuStore(); 
    // const allMenus = menuStore.getMenus(appRoutes, permissions)
    // menuStore.setMenus(allMenus)
    // next()
})