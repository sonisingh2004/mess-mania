import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import baseSqlSchema from "./base.schema";

export const users = pgTable("users", {
  ...baseSqlSchema,
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

