import type { RoleState } from "./RoleState";

/**
 * @author jackson
 * @description 用户数据
 */
export interface UserState {
    name?: string; 
    avatar?: string; 
    organization?: string; 
    email?: string; 
    introduction?: string; 
    registerDate?: string; 
    lastLogin?: string; 
    role?: RoleState; 
} 