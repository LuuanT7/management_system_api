import { PrismaClient } from '@prisma/client';
import { CreateUsers } from './seeds/users.seed';
import { CreateClass } from './seeds/class.seed';
import { CreateEnrollment } from './seeds/enrollment.seed';

const prisma = new PrismaClient();

async function main() {
  try {
    await CreateUsers();
    console.log('Users Seed executado com sucesso!');
    await CreateClass();
    console.log('Classes Seed executado com sucesso!');
    await CreateEnrollment();
    console.log('Enrollments Seed executado com sucesso!');
  } catch (error) {
    console.error('Erro ao executar seed:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
