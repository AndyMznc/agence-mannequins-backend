import { int, mysqlTable, text, varchar } from 'drizzle-orm/mysql-core';
import { model } from './model';

export const pastExperience = mysqlTable(`pastExperience`, {
  pastExperienceId: int(`pastExperience_id`).primaryKey().autoincrement(),
  name: varchar('name', { length: 64 }),
  description: text('description'),
  modelId: int('model_id').references(() => model.modelId),
});
