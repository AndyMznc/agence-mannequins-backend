import { relations } from 'drizzle-orm';
import {
  int,
  mysqlEnum,
  mysqlTable,
  text,
  varchar,
} from 'drizzle-orm/mysql-core';
import { pastExperience } from './pastExperience';
import { photo } from './photo';

export const model = mysqlTable('model', {
  modelId: int(`model_id`).primaryKey().autoincrement(),
  firstName: varchar('first_name', { length: 64 }).notNull(),
  lastName: varchar('last_name', { length: 64 }).notNull(),
  age: int('age').notNull(),
  description: text('description'),
  height: int('height').notNull(),
  weight: int('weight').notNull(),
  genderEnum: mysqlEnum('gender', ['Male', 'Female', 'Other']).notNull(),
  eyesColorEnum: mysqlEnum('eyesColor', [
    'blue',
    'green',
    'brown',
    'grey',
    'black',
    'heterochromia',
  ]).notNull(),
  hairColorEnum: mysqlEnum('hairColor', [
    'blond',
    'brunette',
    'red',
    'black',
    'white',
    'grey',
    'bald',
  ]).notNull(),
});

export const modelRelations = relations(model, ({ many }) => ({
  pastExperience: many(pastExperience),
  photo: many(photo),
}));

export type Model = typeof model.$inferSelect;
export type NewModel = typeof model.$inferInsert;
