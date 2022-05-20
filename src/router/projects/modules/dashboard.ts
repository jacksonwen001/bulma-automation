export default {
    path: '/project/dashboard',
    name: 'dashboard',
    meta: {
        title: "首页",
        permission: 'dashboard:index:view',
        order: 1
    },
    component: () => import('@/views/dashboard/index.vue'),
    redirect: '/project/dashboard/index',
    children: [
        {
            path: "/project/dashboard/index", 
            name: 'dashboard', 
            meta: {
                title: "首页",
                permission: 'dashboard:index:view',
                hidden: true
            },
            component: () => import('@/views/dashboard/dashboard.vue'),

        }
       
    ]
}

