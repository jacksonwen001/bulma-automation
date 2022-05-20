import { login, logout } from "@/apis/auth";
import type { LoginData } from "@/apis/types";
import { getUserInfo } from "@/apis/user";
import { clearToken, getToken, setToken } from "@/utils/token";
import { ElMessage } from "element-plus";
import { defineStore } from "pinia";
import type { UserInfoState } from "./types";


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
                setToken(res.accessToken)
            }
            return res 
        }, 

    
        async logout(){
            const token = getToken(); 
            if(token) {
                const res = await logout(token.id!)
                if(res) {
                    clearToken()
                    return res
                }
            }
            
            
        }, 
        
        async getUserInfo(id:string){
            const res = await getUserInfo(id)
            if(res) {
                this.setUserInfoState(res)
            }
        }, 
    }

})
export default useUserStore