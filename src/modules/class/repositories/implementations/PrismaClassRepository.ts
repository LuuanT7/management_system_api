import { Class } from '@prisma/client';
import { IClassRepository } from '../IClassRepository';
import { prisma } from '../../../../shared/infra/prisma/client';
import { IListClassesDTO } from '../../dtos/IListClassesDTO';
import { IClassDTO } from '../../dtos/IClassDTO';

class PrismaClassRepository implements IClassRepository {
  async create(data: IClassDTO): Promise<Class> {
    const newClass = await prisma.class.create({
      data,
    });
    return newClass;
  }

  async listClasses({ teacherId, shift, subject }: IListClassesDTO): Promise<Class[]> {
    return prisma.class.findMany({
      where: {
        teacherId: teacherId ? teacherId : undefined,
        shift: shift ? shift : undefined,
        subject: subject 
          ? { contains: subject, mode: 'insensitive' }
          : undefined,
      },
      include: {
        teacher: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
} 

export { PrismaClassRepository };