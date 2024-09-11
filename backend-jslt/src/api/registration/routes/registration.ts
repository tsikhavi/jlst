export default {
    routes: [
      {
        method: 'POST',
        path: '/registrations',
        handler: 'registration.create',
        config: {
          policies: [],
          middlewares: [],
        },
      },
      {
        method: 'GET',
        path: '/registrations',
        handler: 'registration.find', // Handles "find" action
        config: {
          policies: [],
          middlewares: [],
        },
      },
      {
        method: 'GET',
        path: '/registrations/:id',
        handler: 'registration.findOne', // Handles "findOne" action
        config: {
          policies: [],
          middlewares: [],
        },
      },
      {
        method: 'PUT',
        path: '/registrations/:id',
        handler: 'registration.update', // Handles "update" action
        config: {
          policies: [],
          middlewares: [],
        },
      },
      {
        method: 'DELETE',
        path: '/registrations/:id',
        handler: 'registration.delete', // Handles "delete" action
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };
  