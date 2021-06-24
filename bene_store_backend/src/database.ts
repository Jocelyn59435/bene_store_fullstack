import { Pool } from 'pg';
import dotenv from 'dotenv';
import config from './config';

dotenv.config();

const client: Pool = new Pool({
  host: config.host,
  database: config.database,
  user: config.user,
  password: config.password,
});
export default client;
