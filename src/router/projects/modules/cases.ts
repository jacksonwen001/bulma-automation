export default  {
    path: '/project/testcase',
    name: 'testcase',
    component: () => import('@/views/testcase/index.vue'), 
    meta: {
        title: '用例管理中心',
        permission: 'testcase:index:view',
        order: 2
    }
}
