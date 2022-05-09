export interface MenuState {
    path:string, 
    children: MenuState[], 
    title: string, 
    order: number
}

export interface MenuList {
    menus: MenuState[]
}