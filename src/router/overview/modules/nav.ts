export default {
    path: '/nav',
    name: 'navigation',
    meta: {
      hidden: true,
      permission: 'navigation:index:view'
    },
    component: () => import('@/views/nav/index.vue')
} 