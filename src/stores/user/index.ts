/**
 * @author jackson
 * @description 登录， 获取用户信息， 登出并清除 accessToken 
 */
import type { LoginData } from "@/api/data/LoginData";
import { getPermission, getUserInfo, login, logout } from "@/api/User";
import { defineStore, mapActions } from "pinia";
import type { RoleState } from "./RoleState";
import type { UserTokenState } from "./TokenState";
import type { UserPermissionState } from "./UserPermissionState";
import type { UserState } from "./UserState";
import type { Menus, MenuState } from "./MenuState"; 
import { clearToken, getToken, setMenus, setToken } from "@/utils/session";
import { getMenusByPermission } from "@/router/url";
import { ElMessage } from "element-plus";


const userStore = defineStore('user', {
    state: (): UserState => ({
        name: undefined,
        avatar: undefined,
        organization: undefined,
        email: undefined,
        introduction: undefined,
        registerDate: undefined,
        lastLogin: undefined,
        role: undefined,
    }),
    getters: {
        userInfo(state: UserState): UserState {
            return { ...state }
        }
    },
    actions: {
        setUserInfo(partial: Partial<UserState>) {
            this.$patch(partial)
        }, 
        /**
         * 登录功能 
         * @param loginForm 
         */
        async login(loginForm: LoginData) {
            try {
                const res = await login(loginForm)
                return res
            }catch(err){
                clearToken() 
                console.log(err)
                throw err 
            }
        }, 
        /**
         * 登出功能 
         */
        async logout(id:number){
            await logout(id)
            clearToken() 
        }, 


        async getUserInfo(usernmae: string) {
           let res = await getUserInfo(usernmae)
           if(res) {
               this.setUserInfo(res.data)
               return res.data
           }else {
               ElMessage.error('获取用户信息失败')
           } 
        }, 
    
    }
})

const roleStore = defineStore('role', {
    state: (): RoleState => ({
        name: undefined,
        permissions: []
    }),
    getters: {
        roleInfo(role: RoleState): RoleState {
            return { ...role }
        }
    },
    actions: {
        setRole(partial: Partial<RoleState>) {
            this.$patch(partial)
        },
        
        async getUserPermission(usenrname: string){
            let res = await getPermission(usenrname)
            if(res){
                this.setRole(res.data)
                return res.data
            }else {
                ElMessage.error('获取用户权限失败')
            }
        }
    }
})

const menuStore = defineStore('menu', {
    state: (): Menus => ({
        menus: []
    }),
    getters: {
        menusInfo(): MenuState[] {
            return this.menus 
        }
    },
    actions: {
        setMenusInStore(menus: MenuState[]){
            this.menus = menus
        }
    }
})

export {
    userStore,
    roleStore,
    menuStore
} 
