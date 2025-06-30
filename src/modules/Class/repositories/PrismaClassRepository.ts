import { IClassRepository, IClassFilters } from './IClassRepository';
import { prisma } from '@shared/infra/database/prisma';
import { IClassDTO } from '../dtos/IClassDTO';

export class PrismaClassRepository implements IClassRepository {
  async findAll(filters: IClassFilters = {}): Promise<IClassDTO[]> {
    const classes = await prisma.class.findMany({
      where: {
        teacherId: filters.teacherId,
        subject: filters.subject,
        shift: filters.shift,
      },
    });

    return classes;
  }
}
