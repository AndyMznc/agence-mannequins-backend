import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
  schema: './src/db/schema',
  out: './drizzle/migrations',
  driver: 'mysql2',
  dbCredentials: {
    host: process.env.DB_HOST as string,
    user: process.env.DB_USER as string | undefined,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME as string,
  },
} satisfies Config;
