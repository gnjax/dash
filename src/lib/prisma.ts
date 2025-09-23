import { PrismaClient } from '@prisma/client';

// Prevent creating many clients in dev (Next.js hot reload)
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['warn', 'error'], // add 'query' if you want verbose logs
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;