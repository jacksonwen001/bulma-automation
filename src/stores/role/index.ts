import { getPermission } from "@/api/User"
import { defineStore } from "pinia"
import type { RoleState } from "./Types"


const useRoleStore = defineStore('useRoleState', {
    state: (): RoleState=> ({
        id: undefined, 
        name: undefined, 
        permissions: []
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
            const res = await getPermission(username) 
            if(res) {
                this.setRoleState(res.data)
            }
        }
    }
})

export default useRoleStore