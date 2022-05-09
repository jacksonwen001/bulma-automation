export interface UserInfoState {
        id?: string,  
        name?: string, 
        avatar?: string 
        organization?: string ,
        email?: string 
        introduction?: string,  
        registerDate?: string, 
        lastLogin?: string, 
        role?: string,
}

export interface UserTokenState {
    id?: string
    username?: string
    accessToken?: string
    refreshToken?: string
}
