// shared/prisma/client.ts
import { PrismaClient } from '@prisma/client';

declare global {
  // Para evitar múltiplas instâncias em hot reload no desenvolvimento
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ??
  new PrismaClient({
    log: ['query'],
  });

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}
