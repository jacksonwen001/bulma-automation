import { getPermissions } from "@/apis/auth"
import { defineStore } from "pinia"
import type { RoleState } from "./types"


const useRoleStore = defineStore('useRoleState', {
    state: (): RoleState=> ({
        id: undefined, 
        name: undefined, 
        permissions: undefined, 
    }), 
    getters: {
        role(state: RoleState){
            return state
        }
    }, 
    actions: {
        setRoleState(state: Partial<RoleState>){
            this.$patch(state)
        }, 
        async getPermission(username: string){
            const res = await getPermissions(username) 
            if(res) {
                this.setRoleState(res)
            }
        }
    }
})

export default useRoleStore