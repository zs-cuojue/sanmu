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
    ],
  },
];
