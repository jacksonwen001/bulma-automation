import { defineStore } from "pinia";
import type { RouteLocationNormalized } from "vue-router";
import type { TabBarState, TabProps } from "./types";

const formatTab = (route: RouteLocationNormalized): TabProps=> {
    const { name, meta, fullPath, query} = route; 
    return {
        title: meta.title || '', 
        name: String(name), 
        fullPath, 
        query
    }
}

const useTabStore = defineStore('tab', {
    state: (): TabBarState => ({
        cacheTabList: new Set(), 
        tabList: []
    }), 
    getters: {
        /** 获取 tab 列表 */
        getTabList(): TabProps[] {
            return this.tabList
        }, 
        /** 获取缓存的 tab */
        getCacheTabList(): string[]{
            return Array.from(this.cacheTabList) 
        }
    }, 
    actions: {
        /** 打开标签页 */
        openTab(route: RouteLocationNormalized) {
            this.tabList.push(formatTab(route)); 
            this.cacheTabList.add(route.name as string); 
        }, 
        /** 关闭标签页 */
        closeTab(idx: number, tab: TabProps) {
            this.tabList.splice(idx, 1); 
            this.cacheTabList.delete(tab.name); 
        }, 
        /** 关闭所有的标签页 */
        closeAllTabs() {
            this.tabList = [], 
            this.cacheTabList = new Set()
        }, 

    }
})
export default useTabStore;