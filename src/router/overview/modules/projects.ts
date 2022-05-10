export default {
    path: '/projects',
    name: 'projects',
    meta: {
        title: "项目列表",
        permission: 'projects:index:view',
    },
    component: () => import('@/views/projects/index.vue'),
}

