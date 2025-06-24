import { prisma } from '../../../../shared/infra/prisma/client';
import { Class } from '@prisma/client';

interface CreateClassData {
  name: string;
  teacherId: number; 
}

export class PrismaClassRepository {
  async create(data: CreateClassData): Promise<Class> {
    return await prisma.class.create({
      data: {
        name: data.name,
        teacher: {
          connect: { id: data.teacherId }
        }
      },
      include: {
        teacher: true // Opcional: inclui os dados do professor na resposta
      }
    });
  }

  async findById(id: number): Promise<Class | null> { // ID é number (Int)
    return await prisma.class.findUnique({
      where: { id },
      include: {
        teacher: true,
        enrollments: true,
        activities: true
      }
    });
  }

  async list(): Promise<Class[]> {
    return await prisma.class.findMany({
      include: {
        teacher: true,
        enrollments: true
      }
    });
  }

  async delete(id: number): Promise<void> { // ID é number (Int)
    await prisma.class.delete({
      where: { id }
    });
  }

  // Método adicional para atualizar uma classe
  async update(id: number, data: Partial<CreateClassData>): Promise<Class> {
    return await prisma.class.update({
      where: { id },
      data: {
        name: data.name,
        teacherId: data.teacherId
      }
    });
  }
}