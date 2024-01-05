export default () => ({
  env: {
    appName: process.env.APP_NAME || 'salah app name',
    appEnv: process.env.APP_ENV || 'salah app Env',
  },
  database: process.env.DATABASE_URL || 'salah database',
});
