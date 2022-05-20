/**
 * Tab 的属性
 */
export interface TagProps {
    title: string, 
    name: string, 
    fullPath: string,  
    query?: any, 
    params?:any
}


/**
 * Tab 的状态
 */
export interface TabBarState {
    tagList: TagProps[]; 
    cacheTabList: Set<string>; 
}