import { Context } from 'koa';
import { sanitize } from '@strapi/utils';

export default {
  async login(ctx: Context) {
    const { identifier, password } = ctx.request.body;

    if (!identifier || !password) {
      return ctx.badRequest('Please provide both identifier and password');
    }

    // Fetch the user by email or username
    const user = await strapi.query('plugin::users-permissions.user').findOne({
      where: { email: identifier },
    });

    if (!user) {
      return ctx.badRequest('Invalid credentials');
    }

    // Validate the password
    const validPassword = await strapi.service('plugin::users-permissions.user').validatePassword(password, user.password);

    if (!validPassword) {
      return ctx.badRequest('Invalid credentials');
    }

    // Generate JWT token
    const token = strapi.service('plugin::users-permissions.jwt').issue({ id: user.id });

    // Set JWT token in a cookie
    ctx.cookies.set('strapi_jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 14 * 24 * 60 * 60 * 1000, // 14 days in milliseconds
      sameSite: 'strict',
      path: '/',
    });

    // Sanitize the user data before returning it
    const sanitizedUser = await sanitize.contentAPI.output(user, strapi.getModel('plugin::users-permissions.user'));

    return ctx.send({
      jwt: token,
      user: sanitizedUser,
    });
  },
};
