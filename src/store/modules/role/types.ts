export interface Permission {
    pages?: string[], 
    elements?: string[], 
}

export interface RoleState {
    id?: string 
    name?: string, 
    permissions?: Permission
}