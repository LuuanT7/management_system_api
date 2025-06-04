import { PrismaClient, Role } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

export async function CreateUserAdmins() {
  try {
    // Criar usuário admin
    const hashedPassword = await hash('Admin@123', 8);
    const users = [
      {
        name: 'Luan Teixeira',
        email: 'luanteixeira@example.com',
        role: 'ADMIN'
      },
      {
        name: 'Alisson Ribeiro',
        email: 'alissonribeiro@example.com',
        role: 'ADMIN'
      },
      {
        name: 'Danilo Lenardi',
        email: 'danilolenardi@example.com',
        role: 'ADMIN'
      }
    ]
    
    await prisma.user.createMany({
      data: users.map((user) => ({
        ...user,
        password: hashedPassword,
        role: user.role as Role
      }))
    });

    console.log('Usuário admin criado com sucesso!');
  } catch (error) {
    console.error('Erro ao criar usuário admin:', error);
    throw error;
  }
}

