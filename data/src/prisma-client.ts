import { PrismaMssql } from '@prisma/adapter-mssql';
import { PrismaClient } from '@prisma/client';
import type { config as SqlConfig } from 'mssql';

let prisma: PrismaClient;

export const getPrismaClient = (): PrismaClient => {
  if (!prisma) {
    const config: SqlConfig = {
      server: process.env.DB_SERVER || '',
      port: 1433,
      database: process.env.DB_NAME || '',
      user: process.env.DB_USER || '',
      password: process.env.DB_PASSWORD || '',
      options: {
        encrypt: true,
        trustServerCertificate: false,
      },
    };

    if (!config.server || !config.database || !config.user || !config.password) {
      throw new Error(
        'Database configuration incomplete. Required: DB_SERVER, DB_NAME, DB_USER, DB_PASSWORD'
      );
    }

    const adapter = new PrismaMssql(config);
    prisma = new PrismaClient({ adapter });
  }
  return prisma;
};
