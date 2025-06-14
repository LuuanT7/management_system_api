import { IProfileRepository } from '../IProfileRepository';
import { IProfileStudentDTO } from '@modules/Profile/DTOS/IProfileDTO';
import { prisma } from '@shared/infra/database/prisma';

export class PrismaProfileRepository implements IProfileRepository {
  async profileStudent(id: string): Promise<IProfileStudentDTO> {
    const student = await prisma.user.findFirst({
      where: { id },
      include: {
        student: {
          include: {
            guardian: {
              include: {
                user: true,
              },
            },
            GradeReport: true,
            attendance: true,
          },
        },
        UserAddress: true,
      },
    });

    return student;
  }
}
