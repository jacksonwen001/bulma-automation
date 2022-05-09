export default {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
        title: "首页",
        permission: 'dashboard:index:view',
        order: 1
    },
    component: () => import('@/views/dashboard/index.vue'),
}

