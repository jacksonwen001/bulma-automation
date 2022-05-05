import type { RouteMeta } from 'vue-router'
import Layout from '@/layout/index.vue'
import type { MenuState } from '@/stores/user/MenuState'


export const staticUrl = [
    {
        path: '/',
        redirect: '/dashboard'
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: 'login',
        },
        component: () => import('@/views/login/index.vue')
    },
    {
        path: '/register',
        name: 'register',
        meta: {
            title: 'register',
        },
        component: () => import('@/views/register/index.vue')
    },
    {
        path: '/test',
        name: 'test',
        meta: {
            title: 'test',
        },
        component: () => import('@/views/test/index.vue')
    },
    {
        path: '/404',
        name: '404',
        meta: {
            title: '404',
        },
        component: () => import('@/views/error/404.vue')
    },
    {
        path: '/401',
        name: '401',
        meta: {
            title: '401',
        },
        component: () => import('@/views/error/401.vue')
    },
    {
        path: '/500',
        name: '500',
        meta: {
            title: '500'
        },
        component: () => import('@/views/error/500.vue')
    },
    {
        path: '/403',
        name: '403',
        meta: {
            title: '403'
        },
        component: () => import('@/views/error/403.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
            permission: 'dashboard:index:view',
            title: '首页'
        },
        component: Layout,
        redirect: '/dashboard/index',
        children: [
            {
                path: '/dashboard/index',
                name: 'dashboardIndex',
                meta: {
                    title: "首页",
                    hidden: true,
                    permission: 'dashboard:index:view',
                },
                component: () => import('@/views/dashboard/index.vue')
            }
        ]
    },
    {
        path: '/sys',
        name: 'system',
        redirect: '/sys/user',
        meta: {
            title: '系统管理',
            permission: 'sys:view'
        },
        component: Layout,
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
    },
    {
        path: '/data',
        name: 'data',
        component: Layout,
        meta: {
            title: '造数中心',
            permission: 'data:index:view'
        },
        redirect: '/data/index',
        children: [
            {
                path: '/data/index',
                name: 'dataIndex',
                meta: {
                    title: '造数中心',
                    permission: 'data:index:view',
                    hidden: true
                },
                component: () => import('@/views/data/index.vue')
            },
            {
                path: '/data/edit',
                name: 'dataEdit',
                meta: {
                    title: '修改',
                    hidden: true,
                    permission: 'data:index.edit',
                },
                component: () => import('@/views/data/EditScenario.vue')
            }
        ]
    },
    {
        path: '/testcase',
        name: 'testcase',
        component: Layout,
        meta: {
            title: '用例管理中心',
            permission: 'testcase:index:view',
        },
        redirect: '/testcase/index',
        children: [
            {
                path: '/testcase/index',
                name: 'testcase',
                meta: {
                    title: '用例管理中心',
                    permission: 'testcase:index:view',
                    hidden: true
                },
                component: () => import('@/views/testcase/index.vue')
            },
        ]
    },
    {
        path: '/automation',
        name: 'automation',
        meta: {
            title: '自动化测试',
            permission: 'automation:index:view'
        },
        component: Layout,
        redirect: '/automation/index',
        children: [
            {
                path: '/automation/index',
                name: 'automation',
                meta: {
                    permission: 'automation:index:view',
                    title: '自动化测试',
                    hidden: true
                },
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
]


/**
 * 获取菜单
 */
function getMenus(routers: any, permissions: any): MenuState[] {
    let menus: MenuState[] = []
    let length = routers.length
    for (let i = 0; i < length; i++) {
        let permission = routers[i].meta?.permission
        if (permission && permissions.includes(permission)) {
            let path = routers[i].path
            let title = routers[i].meta?.title || ''
            let hidden = routers[i].meta?.hidden || false
            if (hidden) {
                continue;
            }
            let children = routers[i]?.children
            let childrenRoutes: MenuState[] = []
            if (children) {
                childrenRoutes = getMenus(children, permissions)
            }
            menus.push({ path, children: childrenRoutes, title })
        }
    }
    return menus
}

export function getMenusByPermission(permissions: any | undefined): MenuState[] {
    if (permissions === undefined) {
        return []
    }
    return getMenus(staticUrl, permissions)
}