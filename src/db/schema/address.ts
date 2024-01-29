import { relations } from 'drizzle-orm';
import { int, mysqlTable, varchar } from 'drizzle-orm/mysql-core';
import { toApply } from './toApply';

export const address = mysqlTable(`address`, {
  addressId: int('address_id').primaryKey().autoincrement(),
  number: varchar('number', { length: 16 }).notNull(),
  street: varchar('street', { length: 64 }).notNull(),
  city: varchar('city', { length: 64 }).notNull(),
  zipCode: varchar('zip_code', { length: 16 }).notNull(),
  country: varchar('country', { length: 64 }).notNull(),
  toApplyId: int('toApply_id')
    .references(() => toApply.toApplyId, { onDelete: 'cascade' })
    .notNull(),
});

export const addressRelations = relations(address, ({ one }) => ({
  toApply: one(toApply, {
    fields: [address.toApplyId],
    references: [toApply.toApplyId],
  }),
}));
