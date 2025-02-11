import { env } from '@/lib/index.config';
import * as schema from '@/shared/db/schema';
import { drizzle } from 'drizzle-orm/postgres-js';

const db = drizzle({
  schema,
  casing: 'snake_case',
  logger: true,
  connection: {
    url:  process.env.DATABASE_URL,
    max: 50,
    idle_timeout: 20,
    keep_alive: 10,
    max_lifetime: 30 * 60 * 1000,
  },
});

export default db;
