import useMenuStore from "./modules/menu";
import useRoleStore from "./modules/role";
import useUserStore from "./modules/user";
import useTabStore from "./modules/tab";
import { createPinia } from "pinia";

const pinia = createPinia();


export {
    useMenuStore, 
    useRoleStore, 
    useTabStore, 
    useUserStore
}

export default pinia; 
