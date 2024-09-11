module.exports = ({ strapi }) => ({
    emailService: async (ctx) => {
      try {
        const input = ctx.request.body.data?.input;
        const emailTo = ctx.request.body.data?.emailTo;
        await strapi.plugins["email"].services.email.send({
          from: "hi@jslt.com",
          to: emailTo,
          subject: "Hello World",
          html: `<p>${input}</p>`,
        });
  
        return {
          message: "Email sent!",
        };
      } catch (err) {
        ctx.body = err;
      }
    },
  });