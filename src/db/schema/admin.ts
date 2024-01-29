import { sql } from 'drizzle-orm';
import {
  datetime,
  int,
  mysqlTable,
  timestamp,
  varchar,
} from 'drizzle-orm/mysql-core';

export const admin = mysqlTable(`admin`, {
  adminId: int(`admin_id`).primaryKey().autoincrement(),
  firstName: varchar('first_name', { length: 64 }).notNull(),
  lastName: varchar('last_name', { length: 64 }).notNull(),
  createdAt: timestamp('createdAt').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: datetime('updatedAt'),
  deletedAt: datetime('deletedAt'),
});

export type Admin = typeof admin.$inferSelect;
export type NewAdmin = typeof admin.$inferInsert;
