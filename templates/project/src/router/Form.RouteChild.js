const baseName = 'form';

const routerChildren = [
  {
    path: `/${baseName}`,
    redirect: `/${baseName}/index`,
  },
  {
    path: `/${baseName}/index`,
    component: () => import('../pages/BaseForm.vue'),
    meta: { title: '基本表单' },
  },
  // vue-quill-editor
  {
    path: `/${baseName}/editor`,
    component: () => import('../pages/VueEditor.vue'),
    meta: { title: '富文本编辑器' },
  },
  // endvue-quill-editor
  // mavon-editor
  {
    path: `/${baseName}/markdown`,
    component: () => import('../pages/Markdown.vue'),
    meta: { title: 'markdown编辑器' },
  },
  // endmavon-editor
  {
    path: `/${baseName}/upload`,
    component: () => import('../pages/Upload.vue'),
    meta: { title: '文件上传' },
  },
];

export default routerChildren;
