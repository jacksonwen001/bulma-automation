export default  {
    path: '/automation',
    name: 'automation',
    meta: {
        title: '自动化测试',
        permission: 'automation:index:view', 
        order: 3
    },
    component: () => import('@/views/automation/index.vue'),
    children: [
        {
            path: '/automation/dashboard',
            name: 'automation-dashboard',
            meta: {
                title: '首页',
                permission: 'automation:index:view',
            },
            component: () => import('@/views/automation/dashboard.vue')
        },
        {
            path: '/automation/selenoid',
            name: 'Selenoid UI Automation',
            meta: {
                title: 'Selenoid',
                permission: 'automation:selenoid:view',
            },
            component: () => import('@/views/automation/selenoidUI.vue')
        },
        {
            path: '/automation/ui',
            name: 'UI Automation',
            meta: {
                title: 'Web 前端自动化测试',
                permission: 'automation:web:view',
            },
            component: () => import('@/views/automation/UI.vue'),
        },
        {
            path: '/automation/api',
            name: 'API Automation',
            meta: {
                title: 'API 自动化测试',
                permission: 'automation:api:view',
            },
            component: () => import('@/views/automation/API.vue')
        }

    ]
}