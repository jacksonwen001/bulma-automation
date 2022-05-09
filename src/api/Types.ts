export interface LoginData {
    username: string
    password: string
}

export interface SearchScenario {
    name?:string
    project?:string
    owner?: string
}

export interface SearchUserData {
    username: string, 
    role: string
}