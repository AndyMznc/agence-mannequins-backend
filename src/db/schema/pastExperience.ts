import { relations } from 'drizzle-orm';
import { int, mysqlTable, text, varchar } from 'drizzle-orm/mysql-core';
import { model } from './model';

export const pastExperience = mysqlTable(`pastExperience`, {
  pastExperienceId: int(`pastExperience_id`).primaryKey().autoincrement(),
  name: varchar('name', { length: 64 }),
  description: text('description'),
  modelId: int('model_id').references(() => model.modelId),
});

export const pastExperienceRelations = relations(pastExperience, ({ one }) => ({
  model: one(model, {
    fields: [pastExperience.modelId],
    references: [model.modelId],
  }),
}));

export type PastExperience = typeof pastExperience.$inferSelect;
export type NewPastExperience = typeof pastExperience.$inferInsert;
