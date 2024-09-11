module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'strapi-provider-email-resend',
      providerOptions: {
        apiKey: env('RESEND_API_KEY'), 
      },
      settings: {
        defaultFrom: 'hi@jslt.com',
        defaultReplyTo: 'from@jslt.com',
      },
    }
  },    
})