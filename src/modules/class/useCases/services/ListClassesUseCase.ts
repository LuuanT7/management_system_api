import { prisma } from "../../../../shared/infra/prisma/client";


interface IFilterParams {
  teacherId?: string; 
  shift?: 'MORNING' | 'AFTERNOON';
  subject?: string; 
}

export class ListClassesUseCase {
  async execute(filters: IFilterParams) {
    const { teacherId, shift, subject } = filters;

    const classes = await prisma.class.findMany({
      where: {
        teacherId: teacherId || undefined,
        shift: shift || undefined,
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

    return classes;
  }
}
