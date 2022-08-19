import dotenv from 'dotenv';

dotenv.config();

export default {
  user: process.env.MONGO_USER || 'ary',
  pass: process.env.MONGO_PASSWORD || '123456789',
  autoIndex: false,
  dbName: process.env.MONGO_DB_CONTAINER || 'Wine',
};