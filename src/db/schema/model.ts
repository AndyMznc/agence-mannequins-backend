import { int, mysqlTable, serial, text, varchar } from 'drizzle-orm/mysql-core';

export const model = mysqlTable('model', {
  id: serial('id').primaryKey(),
  firstName: varchar('first_name', { length: 64 }).notNull(),
  lastName: varchar('last_name', { length: 64 }).notNull(),
  age: int('age').notNull(),
  description: text('description'),
  height: int('height').notNull(),
  weight: int('weight').notNull(),
});
