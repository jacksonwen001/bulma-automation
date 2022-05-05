import { stat } from "fs";
import { defineStore } from "pinia";
import type { AppState } from './AppState'

const appStore = defineStore('app', {
    state: (): AppState => ({
        appName: 'Automation Testing Platform' , 
        theme: 'default theme' , 
        collapse: true,  
        menuLoaded: false
    }), 
    getters: {
        isMenuLoaded(state: AppState):boolean{
            return state.menuLoaded
        }
    }, 
    actions: {
        updateMenuLoaded(status:boolean) {
            this.menuLoaded = status
        }
    },
})