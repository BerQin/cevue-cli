import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/index',
                    redirect: '/index/dashboard'
                },
                {
                    path: '/index/dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../pages/Dashboard.vue'),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/index/icon',
                    component: () => import(/* webpackChunkName: "icon" */ '../pages/Icon.vue'),
                    meta: { title: '自定义图标' }
                },
                {
                    path: '/index/table',
                    component: () => import(/* webpackChunkName: "table" */ '../pages/BaseTable.vue'),
                    meta: { title: '基础表格' }
                },
                {
                    path: '/index/tabs',
                    component: () => import(/* webpackChunkName: "tabs" */ '../pages/Tabs.vue'),
                    meta: { title: 'tab选项卡' }
                },
                // echarts
                {
                    path: '/index/charts',
                    component: () => import(/* webpackChunkName: "chart" */ '../pages/BaseCharts.vue'),
                    meta: { title: 'charts图表' }
                },
                // endecharts
                {
                  path: '/form',
                  redirect: '/form/index'
                },
                {
                    path: '/form/index',
                    component: () => import(/* webpackChunkName: "form" */ '../pages/BaseForm.vue'),
                    meta: { title: '基本表单' }
                },
                // mavon-editor
                {
                    // 富文本编辑器组件
                    path: '/form/editor',
                    component: () => import(/* webpackChunkName: "editor" */ '../pages/VueEditor.vue'),
                    meta: { title: '富文本编辑器' }
                },
                {
                    // markdown组件
                    path: '/form/markdown',
                    component: () => import(/* webpackChunkName: "markdown" */ '../pages/Markdown.vue'),
                    meta: { title: 'markdown编辑器' }
                },
                // endmavon-editor
                {
                    // 图片上传组件
                    path: '/form/upload',
                    component: () => import(/* webpackChunkName: "upload" */ '../pages/Upload.vue'),
                    meta: { title: '文件上传' }
                },
                {
                  path: '/drag',
                  redirect: '/drag/index'
                },
                {
                    // 拖拽列表组件
                    path: '/drag/index',
                    component: () => import(/* webpackChunkName: "drag" */ '../pages/DragList.vue'),
                    meta: { title: '拖拽列表' }
                },
                {
                    // 拖拽Dialog组件
                    path: '/drag/dialog',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../pages/DragDialog.vue'),
                    meta: { title: '拖拽弹框' }
                },
                {
                    path: '/permission',
                    redirect: '/permission/index'
                },
                {
                    // 权限页面
                    path: '/permission/index',
                    component: () => import(/* webpackChunkName: "permission" */ '../pages/Permission.vue'),
                    meta: { title: '权限测试', permission: true }
                },
                {
                    path: '/permission/404',
                    component: () => import(/* webpackChunkName: "404" */ '../pages/404.vue'),
                    meta: { title: '404' }
                },
                // vue-i18n
                {
                    // 国际化页面
                    path: '/i18n',
                    component: () => import(/* webpackChunkName: "permission" */ '../pages/I18n.vue'),
                    meta: { title: '国际化页面', permission: true }
                },
                // endvue-i18n
                {
                    path: '/403',
                    component: () => import(/* webpackChunkName: "403" */ '../pages/403.vue'),
                    meta: { title: '403' }
                }
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../pages/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/permission/404'
        }
    ]
});
