import { relations } from 'drizzle-orm';
import { int, mysqlTable, varchar } from 'drizzle-orm/mysql-core';
import { model } from './model';

export const photo = mysqlTable(`photo`, {
  photoId: int(`photo_id`).primaryKey().autoincrement(),
  photo: varchar('photo', { length: 2048 }),
  modelId: int('model_id').references(() => model.modelId),
});

export const photoRelations = relations(photo, ({ one }) => ({
  model: one(model, {
    fields: [photo.modelId],
    references: [model.modelId],
  }),
}));
