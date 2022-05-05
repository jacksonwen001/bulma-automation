import type { RouteLocationNormalized } from "vue-router";
import { defineStore } from "pinia";
import type { TabBarState, TagProps } from './types'

const formatTag = (route: RouteLocationNormalized): TagProps => {
    const { name, meta, fullPath, query} = route; 
    return {
        title: meta.title || '', 
        name: String(name), 
        fullPath, 
        query
    }
}
const tabStore = defineStore('tabBar', {
    state: (): TabBarState => ({
        cacheTabList: new Set(), 
        tagList: [{
            title: 'menu.dashboard.index',
            name: 'index', 
            fullPath: '/dashboard/index'
        }]
    }), 
    getters: {
        getTabList(): TagProps[] {
            return this.tagList; 
        }, 
        getCacheList(): string[] {
            return Array.from(this.cacheTabList)
        }
    }, 
    actions: {
        updateTabList(route: RouteLocationNormalized){
            this.tagList.push(formatTag(route))
            this.cacheTabList.add(route.name as string)
        }, 
        deleteTag(idx: number, tag: TagProps){
            this.tagList.splice(idx, 1)
            this.cacheTabList.delete(tag.name)
        }
    }
})
export default tabStore