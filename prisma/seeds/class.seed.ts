import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function CreateClass() {
  const teachers = await prisma.teacher.findMany();

  const classes = [
    {
      name: '1º Ano',
      subject: 'Matemática',
      shift: 'MORNING',
      teacherId: teachers[0].id,
    },
    {
      name: '1º Ano',
      subject: 'Lingua Portuguesa',
      shift: 'MORNING',
      teacherId: teachers[0].id,
    },
    {
      name: '1º Ano',
      subject: 'História',
      shift: 'MORNING',
      teacherId: teachers[0].id,
    },
    {
      name: '1º Ano',
      subject: 'Geografia',
      shift: 'MORNING',
      teacherId: teachers[0].id,
    },
  ];

  await prisma.class.createMany({
    data: classes.map((classe) => ({
      ...classe,
      shift: classe.shift as any, // Faz o cast para o tipo correto esperado pelo Prisma
    })),
  });
}
