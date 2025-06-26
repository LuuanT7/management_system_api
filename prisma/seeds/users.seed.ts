import { PrismaClient, Role } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

export async function CreateUsers() {
  try {
    // Criar usuário admin
    const hashedPassword = await hash('Admin@123', 8);
    const users = [
      {
        name: 'Luan Teixeira',
        email: 'luanteixeira@example.com',
        role: 'ADMIN',
        cpf: faker.string.numeric(11),
        rg: faker.string.numeric(9),
        gender: 'Masculino',
        birthDate: faker.date.birthdate(),
        phone: faker.phone.number(),
      },
      {
        name: 'Alisson Ribeiro',
        email: 'alissonribeiro@example.com',
        role: 'ADMIN',
        cpf: faker.string.numeric(11),
        rg: faker.string.numeric(9),
        gender: 'Masculino',
        birthDate: faker.date.birthdate(),
        phone: faker.phone.number(),
      },
      {
        name: 'Danilo Lenardi',
        email: 'danilolenardi@example.com',
        role: 'ADMIN',
        cpf: faker.string.numeric(11),
        rg: faker.string.numeric(9),
        gender: 'Masculino',
        birthDate: faker.date.birthdate(),
        phone: faker.phone.number(),
      },
      {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        role: 'STUDENT',
        cpf: faker.string.numeric(11),
        rg: faker.string.numeric(9),
        gender: faker.person.gender(),
        birthDate: faker.date.birthdate(),
        phone: faker.phone.number(),
      },
      {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        role: 'GUARDIAN',
        cpf: faker.string.numeric(11),
        rg: faker.string.numeric(9),
        gender: faker.person.gender(),
        birthDate: faker.date.birthdate(),
        phone: faker.phone.number(),
      },
      {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        role: 'TEACHER',
        cpf: faker.string.numeric(11),
        rg: faker.string.numeric(9),
        gender: faker.person.gender(),
        birthDate: faker.date.birthdate(),
        phone: faker.phone.number(),
      },
      {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        role: 'STUDENT',
        cpf: faker.string.numeric(11),
        rg: faker.string.numeric(9),
        gender: faker.person.gender(),
        birthDate: faker.date.birthdate(),
        phone: faker.phone.number(),
      },
    ];

    await prisma.user.createMany({
      data: users.map((user) => ({
        ...user,
        password: hashedPassword,
        role: user.role as Role,
      })),
      skipDuplicates: true,
    });

    const findUser = await prisma.user.findMany({
      orderBy: { id: 'asc' },
    });

    const findGuardian = await prisma.guardian.findMany();

    await prisma.guardian.create({
      data: { userId: findUser[4].id },
    });

    await prisma.student.createMany({
      data: [
        { userId: findUser[3].id, guardianId: findGuardian[0].id },
        { userId: findUser[6].id, guardianId: findGuardian[0].id },
      ],
      skipDuplicates: true,
    });

    await prisma.teacher.create({
      data: { userId: findUser[5].id },
    });

    const userAddress = findUser.map((user) => ({
      userId: user.id,
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      number: faker.string.numeric(2),
      zipCode: faker.string.numeric(8),
      complement: faker.lorem.sentence(),
    }));

    await prisma.userAddress.createMany({
      data: userAddress,
      skipDuplicates: true,
    });

    console.log('Usuário admin criado com sucesso!');
  } catch (error) {
    console.error('Erro ao criar usuário admin:', error);
    throw error;
  }
}
