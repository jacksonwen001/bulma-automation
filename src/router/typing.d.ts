import 'vue-router'

declare module 'vue-router' {
    interface RouteMeta {
        title?: string;
        icon?: string;
        permission: string;
        hidden?: boolean;
        order?: number;
        ignoreCache?: boolean
    }
}