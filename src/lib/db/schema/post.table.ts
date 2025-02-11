import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { baseSqlSchema } from "./base.schema";
import { users } from "./user.table";

export const posts = pgTable('posts', {
  ...baseSqlSchema,
  title: text('title').notNull(),
  content: text('content').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});
