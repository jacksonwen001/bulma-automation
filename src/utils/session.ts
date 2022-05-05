import type { MenuState } from "@/stores/user/MenuState"
import type { UserTokenState } from "@/stores/user/TokenState"

const TOKEN_KEY = "token"
const MENU_KEY = 'menus'

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

export function getMenus():MenuState[]{
    return JSON.parse(localStorage.getItem(MENU_KEY)!)
}

export function setMenus(menus: MenuState[]) {
    localStorage.setItem(MENU_KEY, JSON.stringify(menus))
}