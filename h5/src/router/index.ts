import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '@/layout/index.vue'
import { formProps } from 'vant'
import { useSettingStore } from '../store/module/setting'

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
    {
        path: '/',
        component: Layout,
        redirect: 'home',
        children: [
            {
                path: 'home',
                name: 'HomeIndex',
                component: () => import('@/views/home/index.vue'),
            },
            {
                path: 'new',
                name: 'NewIndex',
                component: () => import('@/views/new/index.vue'),
            },
            {
                path: 'category',
                name: 'CategoryIndex',
                component: () => import('@/views/category/index.vue'),
            },
            {
                path: 'fine',
                name: 'FineIndex',
                component: () => import('@/views/fine/index.vue'),
            },
            {
                path: 'my',
                name: 'MyIndex',
                component: () => import('@/views/my/index.vue'),
            },
            {
                path: 'info',
                name: 'InfoIndex',
                component: () => import('@/views/my/info.vue'),
            },
            {
                path: 'search',
                name: 'SearchIndex',
                component: () => import('@/views/search/index.vue'),
            },
        ],
    },
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        meta: { title: '登录' },
    },
    {
        path: '/register',
        component: () => import('~/src/views/login/register.vue'),
        meta: { title: '会员注册' },
    },
    {
        path: '/details',
        component: () => import('@/views/details/index.vue'),
        meta: { title: '详情' },
    },
    {
        path: '/reading',
        component: () => import('@/views/reading/index.vue'),
        meta: { title: '阅读' },
    },
]

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

// 路由守卫
router.beforeEach((to, _) => {
    // 底部导航选中设置
    const useSetting = useSettingStore()

    // 获取路径name
    const name = to.path.replace('/', '')
    // 判断是否底部导航路径
    for (let i in useSetting.bottomItems) {
        let v = useSetting.bottomItems[i]
        // 判断路由路径和底部导航name是否一致
        if (v.name != name) {
            continue
        }
        // 设置底部导航选中项
        useSetting.setBottomActive(Number(i))
    }

    // 权限管理
    return
})

export function setupRouter(app: any) {
    app.use(router)
    return router
}

export default router
