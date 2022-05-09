import 'vue-router'
/**
 * @author jackson
 * @description 声明 meta 
 */
declare module 'vue-router' {
    interface RouteMeta {
        title?: string; 
        permission?: string; 
        order?: number
    }
}