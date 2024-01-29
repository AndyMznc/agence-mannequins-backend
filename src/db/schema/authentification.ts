import { relations } from 'drizzle-orm';
import { int, mysqlEnum, mysqlTable, varchar } from 'drizzle-orm/mysql-core';
import { admin } from './admin';
import { model } from './model';

export const authentification = mysqlTable(`authentification`, {
  authentificationId: int('authentification_id').primaryKey().autoincrement(),
  userType: mysqlEnum('user_type', ['model', 'admin']).notNull(),
  userId: int('user_id').notNull(),
  email: varchar('email', { length: 128 }).notNull(),
  password: varchar('password', { length: 64 }).notNull(),
  modelId: int('model_id').references(() => model.modelId),
});

export const authentificationRelations = relations(
  authentification,
  ({ one }) => ({
    model: one(model, {
      fields: [authentification.modelId],
      references: [model.modelId],
    }),

    admin: one(admin, {
      fields: [authentification.userId],
      references: [admin.adminId],
    }),
  }),
);
