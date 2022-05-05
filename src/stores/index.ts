import { createPinia } from "pinia"
import tabStore from "./tab";
import { userStore, roleStore, menuStore } from "./user";


const pinia = createPinia(); 
export { 
    tabStore,
    userStore,
    roleStore,  
    menuStore,
}
export default pinia