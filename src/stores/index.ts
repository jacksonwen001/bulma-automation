import { createPinia } from "pinia"
import useMenuStore from "./menu";
import useTabStore from "./tab";
import  useUserStore  from './user'; 
import useRoleStore from './role'; 

const pinia = createPinia(); 
export { 
    useTabStore,
    useUserStore, 
    useMenuStore, 
    useRoleStore
}
export default pinia