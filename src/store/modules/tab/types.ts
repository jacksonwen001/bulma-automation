/**
 * 标签对象 
 */
export interface TabProps {
    title: string; 
    name: string; 
    fullPath: string; 
    query?: any
}

export interface TabBarState {
    tabList: TabProps[], 
    cacheTabList: Set<string>
}