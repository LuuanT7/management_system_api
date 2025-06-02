import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  log: ['query', 'error', 'warn'],
})

process.on('beforeExit', () => {
  prisma.$disconnect()
})

export { prisma }
