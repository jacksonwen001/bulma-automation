import type { UserTokenState } from "@/stores/user/Types"

const TOKEN_KEY = "token"

export function isLogin():boolean {
    return !!localStorage.getItem(TOKEN_KEY)
}

export function getToken(): UserTokenState | null {
    return JSON.parse(localStorage.getItem(TOKEN_KEY)!)
}

export function setToken(token: UserTokenState) {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(token))
}

export function clearToken(){
    localStorage.removeItem(TOKEN_KEY)
}