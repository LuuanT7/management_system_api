import { PrismaClient } from '@prisma/client';
import { CreateUserAdmins } from './seeds/users.seed';

const prisma = new PrismaClient();

async function main() {
  try {
    await CreateUserAdmins();
    console.log('Seed executado com sucesso!');
  } catch (error) {
    console.error('Erro ao executar seed:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 