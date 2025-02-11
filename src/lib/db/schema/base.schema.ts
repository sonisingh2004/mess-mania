import { sql } from 'drizzle-orm';
import { timestamp, uuid } from 'drizzle-orm/pg-core';

const baseSqlSchema = {
  id: uuid('id').primaryKey().default(sql`gen_random_uuid()`),
  createdAt: timestamp('created_at', {
    withTimezone: true,
    mode: 'date',
    precision: 6,
  })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp('updated_at', {
    withTimezone: true,
    mode: 'date',
    precision: 6,
  })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
  deletedAt: timestamp('deleted_at', {
    withTimezone: true,
    mode: 'date',
    precision: 6,
  }),
};

export default baseSqlSchema;
