export default [
  {
    path: '/',
    component: '@/layouts/RootLayout',
    routes: [
      {
        path: '/',
        redirect: '/desktop',
      },
      {
        path: '/desktop',
        component: './desktop/desktop',
      },
      {
        path: '/sanmu',
        name: 'sanmu',
        component: './sanmu/sanmu',
      },
      {
        path: '/monitor',
        name: 'monitor',
        component: './monitor/monitor',
      },
    ],
  },
];
