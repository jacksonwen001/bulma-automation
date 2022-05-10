export default {
    path: '/project/data',
    name: 'data',
    meta: {
        title: '造数中心',
        permission: 'data:index:view',
        order: 4
    },
    component: () => import('@/views/data/index.vue'), 
    children: [ 
        {
            path: '/project/data/index',
            name: 'index', 
            meta: {
                title: '造数中心',
                permission: 'data.index.view'
            },
            component: () => import('@/views/data/index.vue')
        },
        {
            path: '/project/data/edit',
            name: 'dataEdit',
            meta: {
                title: '修改',
                hidden: true,
                permission: 'data:index.edit',
            },
            component: () => import('@/views/data/EditScenario.vue')
        }
    ]
}