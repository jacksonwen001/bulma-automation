import Layout from '@/layout/Index.vue'
export default [
    {
        path: '/project/dashboard',
        name: 'Dashboard',
        meta: {
            title: "首页",
            permission: 'dashboard:index:view',
            order: 1
        },
        component: Layout,
        redirect: '/project/dashboard/index', 
        children: [
            {
                path: '/project/dashboard/index',
                name: 'Dashboard',
                meta: {
                    title: "首页",
                    permission: 'dashboard:index:view',
                    order: 1, 
                    hidden: true
                },
                component: () => import('@/views/dashboard/Index.vue')
            }, 
        ]
    },
    {
        path: '/project/test',
        name: 'Test',
        meta: {
            title: "test",
            permission: 'dashboard:index:view',
            order: 2
        },
        component: Layout, 
        redirect: '/project/test/index', 
        children: [
            {
                path: '/project/test/index', 
                name: 'Test', 
                meta: {
                    title: "测试",
                    permission: 'dashboard:index:view',
                    order: 1,
                    ignoreCache: false,
                    hidden: true
                },
                component: () => import ('@/views/test/Index.vue') 
            },
            {
                path: '/project/test/index', 
                name: 'Test', 
                meta: {
                    title: "测试",
                    permission: 'dashboard:index:view',
                    order: 1,
                    ignoreCache: false,
                    hidden: true
                },
                component: () => import ('@/views/test/Index.vue') 
            },
        ]
    },
    {
        path: '/project/system',
        name: 'system',
        meta: {
            title: "系统管理",
            permission: 'dashboard:index:view',
            order: 1
        },
        component: Layout,
        children: [
            {
                path: '/project/system/user',
                name: 'User',
                meta: {
                    title: "用户管理",
                    permission: 'dashboard:index:view',
                    order: 1, 
                },
                component: () => import('@/views/system/User.vue')
            }, 
            {
                path: '/project/system/role',
                name: 'Role',
                meta: {
                    title: "用户角色管理",
                    permission: 'dashboard:index:view',
                    order: 1, 
                },
                component: () => import('@/views/system/Role.vue')
            }, 
        ]
    },

    
]

