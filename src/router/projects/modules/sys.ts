export default {
    path: '/sys',
    name: 'system',
    meta: {
        order: 5, 
        title: '系统管理',
        permission: 'sys:view'
    },
    component: () => import('@/views/sys/index.vue'), 
    children: [
        {
            path: '/sys/user',
            name: 'sysUser',
            meta: {
                permission: 'sys:user:view',
                title: '用户管理',
            },
            component: () => import('@/views/sys/UserManage.vue'),
        },
        {
            path: '/sys/role',
            name: 'sysRole',
            meta: {
                permission: 'sys:role:view',
                title: '角色管理'
            },
            component: () => import('@/views/sys/RoleManage.vue'),
        },
        {
            path: '/sys/project',
            name: 'sysProject',
            meta: {
                permission: 'sys:project:view',
                title: '项目管理'
            },
            component: () => import('@/views/sys/Project.vue')
        }
    ]
}