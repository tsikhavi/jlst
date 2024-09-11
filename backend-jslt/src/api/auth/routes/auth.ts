export default {
  routes: [
    {
      method: 'POST',
      path: '/auth/login',
      handler: 'auth.login',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
