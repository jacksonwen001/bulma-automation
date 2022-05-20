import type { UserTokenState } from "@/store/modules/user/types"

const TOKEN_KEY = "token"

export function isLogin(): boolean {
    return !!localStorage.getItem(TOKEN_KEY)
}

export function getToken(): UserTokenState | null {
    const token = localStorage.getItem(TOKEN_KEY);

    if (token !== 'undefined') {
        console.log("token =====")
        console.log(token)
        return JSON.parse(token!)
    }

    return null;
}

export function setToken(token: UserTokenState) {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(token))
}

export function clearToken() {
    localStorage.removeItem(TOKEN_KEY)
}