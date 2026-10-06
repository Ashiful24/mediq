import { Global, Module } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

export const DATABASE = 'DATABASE';

@Global()
@Module({
  providers: [
    {
      provide: DATABASE,
      useFactory: () => {
        const pool = new Pool({
          connectionString: process.env.DATABASE_URL,
        });

        return drizzle(pool, { schema });
      },
    },
  ],
  exports: [DATABASE],
})
export class DatabaseModule {}
