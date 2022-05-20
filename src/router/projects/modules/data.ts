import { useRoute, useRouter } from 'vue-router';

export default {
    path: '/project/data',
    name: 'data',
    meta: {
        title: '造数中心',
        permission: 'data:index:view',
        order: 4
    },
    component: () => import('@/views/data/index.vue'), 
    redirect: '/project/data/view',
    children: [
        {
            path: '/project/data/view',
            name: 'view',
            meta: {
                title: '造数中心',
                hidden: true,
                permission: 'data:index.edit',
            },
            component: () => import('@/views/data/View.vue'),
        }, 
        {
            path: '/project/data/edit',
            name: 'dataEdit',
            meta: {
                title: '造数中心-修改',
                hidden: true,
                permission: 'data:index.edit',
            },
            component: () => import('@/views/data/EditScenario.vue')
        }
    ]
}