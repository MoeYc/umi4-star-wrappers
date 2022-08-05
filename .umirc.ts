export default {
  npmClient: 'pnpm',
  routes: [
    {
      path: '/files/*',
      component: 'user',
      wrappers: ['@/wrappers/auth'],
      routes: [
        {
          path: 's',
          component: 's'
        }
      ]
    },
  ],
}
