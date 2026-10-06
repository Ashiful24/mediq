import {
  boolean,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

export const userTypes = pgEnum('user_types', [
  'SYSTEM_ADMIN',
  'PROPERTY_ADMIN',
  'USER',
  'PROPERTY_STAFF',
]);

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  firstname: varchar('firstname', { length: 30 }),
  lastname: varchar('lastname', { length: 30 }),
  email: text('email'),
  phone: varchar('phone', { length: 15 }).notNull(),
  gender: varchar('gender', { length: 10 }),
  date_of_birth: varchar('date_of_birth', { length: 10 }),
  profile_picture: text('profile_picture'),
  user_type: userTypes('user_type').default('USER'),
  password: text('password'),
  is_active: boolean('is_active').default(true),

  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at')
    .defaultNow()
    .$onUpdateFn(() => new Date()),
  created_by: varchar('created_by', { length: 30 }),
  updated_by: varchar('updated_by', { length: 30 }),
});
