export interface MenuState {
    path:string, 
    children: MenuState[], 
    title: string, 
    order: number,
    icon?: string, 
}

export interface MenuList {
    menus: MenuState[]
}