export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { name: '登录', path: '/user/login', component: './user/Login' },
      { component: './404' },
    ],
  },
  { path: '/sanmu', icon: 'smile', component: './sanmu/sanmu' },
  { path: '/monitor', icon: 'smile', component: './monitor/monitor' },
  { path: '/', redirect: '/sanmu' },
  { component: './404' },
];
