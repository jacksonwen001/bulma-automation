export interface MenuState {
    path:string, 
    children: MenuState[], 
    title: string 
}

export interface Menus {
    menus: MenuState[]
}