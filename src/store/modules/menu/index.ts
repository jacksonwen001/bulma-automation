import { defineStore } from "pinia";
import type { MenuList, MenuState } from "./types";

const useMenuStore = defineStore('menu', {
    state: (): MenuList => ({
        menus: []
    }), 
    getters: {
        menuList() : MenuState[]{
            return this.menus
        }
    }, 
    actions: {
        setMenus(state: MenuState[]){
            // console.log(state)
            // this.push(...state)
            this.menus = state

        }, 
        getMenus(routers: any, permissions: any): MenuState[] {
            let menus: MenuState[] = []
            let length = routers.length
            for (let i = 0; i < length; i++) {
                // permission 分为两种， 一种是页面级别的权限， 一种是按钮之类的权限， 这里是菜单，所以判断页面
                let permission = routers[i].meta?.permission
                
                if (permission && permissions.includes(permission)) {
                    let path = routers[i].path
                    let title = routers[i].meta?.title || ''
                    let hidden = routers[i].meta?.hidden || false
                    let order = routers[i].meta?.order
                    let icon = routers[i].meta.icon;
                    if (hidden) {
                        continue;
                    }
                    let children = routers[i]?.children
                    let childrenRoutes: MenuState[] = []
                    if (children) {
                        childrenRoutes = this.getMenus(children, permissions)
                    }
                    menus.push({ path, children: childrenRoutes, title, order, icon})
                }
            }
            return menus
        }
    }
})

export default useMenuStore