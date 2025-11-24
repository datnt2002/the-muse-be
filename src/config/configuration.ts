export default () => ({
  NODE_ENV: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT!, 10) || 3000,
  database: process.env.DATABASE_URL || '',
});
