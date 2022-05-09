import { createPinia } from "pinia"
import useMenuStore from "./menu";
import tabStore from "./tab";
import  useUserStore  from './user'; 
import useRoleStore from './role'; 

const pinia = createPinia(); 
export { 
    tabStore,
    useUserStore, 
    useMenuStore, 
    useRoleStore
}
export default pinia