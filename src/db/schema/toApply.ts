import { relations } from 'drizzle-orm';
import {
  boolean,
  int,
  mysqlTable,
  text,
  varchar,
} from 'drizzle-orm/mysql-core';
import { address } from './address';

export const toApply = mysqlTable(`toApply`, {
  toApplyId: int(`toApply_id`).primaryKey().autoincrement(),
  firstName: varchar('first_name', { length: 64 }).notNull(),
  lastName: varchar('last_name', { length: 64 }).notNull(),
  age: int('age').notNull(),
  description: text('description'),
  photo: varchar('photo', { length: 2048 }).notNull(),
  height: int('height').notNull(),
  weight: int('weight').notNull(),
  availability: boolean('availability').default(false),
});

export const toApplyRelations = relations(toApply, ({ one }) => ({
  address: one(address, {
    fields: [toApply.toApplyId],
    references: [address.toApplyId],
  }),
}));
