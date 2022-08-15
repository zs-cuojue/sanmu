export default [
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
  {
    path: '/',
    redirect: '/monitor',
  },
];
