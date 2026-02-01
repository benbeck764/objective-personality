import { PrismaClient } from 'objective-personality-data/client';

let prisma: PrismaClient;

export function getPrismaClient(): PrismaClient {
  if (!prisma) prisma = new PrismaClient();
  return prisma;
}
