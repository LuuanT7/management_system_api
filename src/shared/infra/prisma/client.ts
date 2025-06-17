import { PrismaClient } from '@prisma/client';

// Cria uma instância do Prisma
const prisma = new PrismaClient();

// Exporta a instância para ser usada em outros arquivos
export { prisma };