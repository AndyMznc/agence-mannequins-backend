import { drizzle } from 'drizzle-orm/mysql2';
import { migrate } from 'drizzle-orm/mysql2/migrator';
import mysql from 'mysql2';

const main = async () => {
  const poolConnection = await mysql.createPool({
    host: process.env.DB_HOST as string,
    user: process.env.DB_USER as string | undefined,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME as string,
    port: process.env.DB_PORT as number | undefined,
  });

  const db = drizzle(poolConnection);

  await migrate(db, { migrationsFolder: './drizzle/migrations' });

  console.log('Migration done!');
};
main();
