module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  'import-export-entries': {
    enabled: true,
    config: {
      // See `Config` section.
    },
  },
  email: {
    config: {
      provider: 'nodemailer',
      // development options
      // providerOptions: {
      //   host: 'localhost',
      //   port: 1025,
      //   ignoreTLS: true,
      // },
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.example.com'),
        port: env('SMTP_PORT', 587),
        secure: true,
        auth: {
          type: 'LOGIN',
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      settings: {
        defaultFrom: 'no-reply@vbtc.org.au',
        defaultReplyTo: 'hello@vbtc.org.au',
      },
    },
  },
});