import type { UserPermissionState } from './UserPermissionState'

/**
 * @author jackson 
 * @description 角色定义 
 */
export interface RoleState {
    id?:string
    name?: string; 
    permissions?: UserPermissionState[] 
}
