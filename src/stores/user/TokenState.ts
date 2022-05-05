
/**
 * @author jackson 
 */
export interface UserTokenState {
    id?:number
    username?: string
    permissions?:string[]
    accessToken?: string
    refreshToken?: string 
}