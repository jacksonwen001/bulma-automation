import type { LoginData } from "@/api/Types";
import { getPermission, getUserInfo, getUsers, isTokenValid, login, logout } from "@/api/User";
import { clearToken, setToken } from "@/utils/LocalStorageUtil";
import { ElMessage } from "element-plus";
import { defineStore } from "pinia";
import type { UserInfoState } from "./Types";


const useUserStore = defineStore('useUserStore', {
    state: (): UserInfoState => ({
        id: undefined,  
        name: undefined, 
        avatar: undefined, 
        organization: undefined ,
        email: undefined,
        introduction: undefined,  
        registerDate: undefined, 
        lastLogin: undefined, 
        role: undefined,
       
    }), 
   
    actions: {
        setUserInfoState(partial: Partial<UserInfoState>) {
            this.$patch(partial)
        }, 
        async signIn(loginData: LoginData) {
            const res = await login(loginData)
            if(res) {
                setToken(res.data.accessToken)
            }
            return res 
        }, 

    
        async logout(username: string){
            const res = await logout(username)
            if(res) {
                clearToken()
                ElMessage.success(res.data.message)
            }
        }, 
        
        async getUserInfo(id:string){
            const res = await getUserInfo(id)
            if(res) {
                this.setUserInfoState(res.data)
            }
        }, 
    }

})
export default useUserStore