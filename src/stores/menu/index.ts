import { defineStore } from "pinia";
import type { MenuList, MenuState } from "./type";

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
                let permission = routers[i].meta?.permission
                if (permission && permissions.includes(permission)) {
                    let path = routers[i].path
                    let title = routers[i].meta?.title || ''
                    let hidden = routers[i].meta?.hidden || false
                    let order = routers[i].meta?.order
                    if (hidden) {
                        continue;
                    }
                    let children = routers[i]?.children
                    let childrenRoutes: MenuState[] = []
                    if (children) {
                        childrenRoutes = this.getMenus(children, permissions)
                    }
                    menus.push({ path, children: childrenRoutes, title, order})
                }
            }
            return menus
        }
    }
})

export default useMenuStore