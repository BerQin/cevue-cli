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
            component: () => import('../components/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/index',
                    redirect: '/index/dashboard'
                },
                {
                    path: '/index/dashboard',
                    component: () => import('../pages/Dashboard.vue'),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/index/icon',
                    component: () => import('../pages/Icon.vue'),
                    meta: { title: '自定义图标' }
                },
                {
                    path: '/index/table',
                    component: () => import('../pages/BaseTable.vue'),
                    meta: { title: '基础表格' }
                },
                {
                    path: '/index/tabs',
                    component: () => import('../pages/Tabs.vue'),
                    meta: { title: 'tab选项卡' }
                },
                // echarts
                {
                    path: '/index/charts',
                    component: () => import('../pages/BaseCharts.vue'),
                    meta: { title: 'charts图表' }
                },
                // endecharts
                {
                  path: '/form',
                  redirect: '/form/index'
                },
                {
                    path: '/form/index',
                    component: () => import('../pages/BaseForm.vue'),
                    meta: { title: '基本表单' }
                },
                // vue-quill-editor
                {
                    path: '/form/editor',
                    component: () => import('../pages/VueEditor.vue'),
                    meta: { title: '富文本编辑器' }
                },
                // endvue-quill-editor
                // mavon-editor
                {
                    path: '/form/markdown',
                    component: () => import('../pages/Markdown.vue'),
                    meta: { title: 'markdown编辑器' }
                },
                // endmavon-editor
                {
                    path: '/form/upload',
                    component: () => import('../pages/Upload.vue'),
                    meta: { title: '文件上传' }
                },
                {
                  path: '/drag',
                  redirect: '/drag/index'
                },
                {
                    path: '/drag/index',
                    component: () => import('../pages/DragList.vue'),
                    meta: { title: '拖拽列表' }
                },
                {
                    path: '/drag/dialog',
                    component: () => import('../pages/DragDialog.vue'),
                    meta: { title: '拖拽弹框' }
                },
                {
                    path: '/permission',
                    redirect: '/permission/index'
                },
                {
                    path: '/permission/index',
                    component: () => import('../pages/Permission.vue'),
                    meta: { title: '权限测试', permission: true }
                },
                {
                    path: '/permission/404',
                    component: () => import('../pages/404.vue'),
                    meta: { title: '404' }
                },
                // vue-i18n
                {
                    path: '/i18n',
                    component: () => import('../pages/I18n.vue'),
                    meta: { title: '国际化页面', permission: true }
                },
                // endvue-i18n
                {
                    path: '/403',
                    component: () => import('../pages/403.vue'),
                    meta: { title: '403' }
                }
            ]
        },
        {
            path: '/login',
            component: () => import('../pages/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/permission/404'
        }
    ]
});
