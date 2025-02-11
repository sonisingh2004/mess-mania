import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from './schema';

const db = drizzle({
  schema: schema,
  casing: 'snake_case',
  logger: true,
  connection: {
    url: process.env.DATABASE_URL,
    max: 50,
    idle_timeout: 20,
    keep_alive: 10,
    max_lifetime: 30 * 60 * 1000,
  },
});

export default db;
