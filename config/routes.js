export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/sanmu',
    name: 'sanmu',
    icon: 'smile',
    component: './sanmu/sanmu',
  },
  {
    path: '/monitor',
    name: 'monitor',
    icon: 'smile',
    component: './monitor/monitor',
  },
  {
    path: '/',
    redirect: '/sanmu',
  },
  {
    component: './404',
  },
];
