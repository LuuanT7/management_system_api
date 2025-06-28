import { IProfileRepository } from '../IProfileRepository';
import {
  IProfileGuardianDTO,
  IStudentProfileDTO,
  ITeacherProfileDTO,
} from '@modules/Profile/DTOS/IProfileDTO';
import { prisma } from '@shared/infra/database/prisma';

export class PrismaProfileRepository implements IProfileRepository {
  async profileStudent(userId: string): Promise<IStudentProfileDTO> {
    const student = await prisma.student.findFirst({
      where: { userId },
      include: {
        User: {
          select: {
            id: true,
            name: true,
            email: true,
            cpf: true,
            birthDate: true,
            gender: true,
            phone: true,
            rg: true,
            UserAddresses: true,
          },
        },
        Guardian: {
          select: {
            User: true,
          },
        },
        Enrollments: true,
        GradeReport: true,
        Attendance: true,
      },
    });

    return student;
  }

  async profileTeacher(id: string): Promise<ITeacherProfileDTO> {
    const teacher = await prisma.user.findFirst({
      where: { id },
      include: {
        Teacher: {
          select: {
            id: true,
            Class: {
              select: {
                id: true,
                name: true,
                shift: true,
                Enrollments: {
                  select: {
                    Student: {
                      select: {
                        id: true,
                        User: {
                          select: {
                            id: true,
                            name: true,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });

    return teacher;
  }

  async profileGuardian(id: string): Promise<IProfileGuardianDTO> {
    const guardian = await prisma.user.findFirst({
      where: { id },
      include: {
        Guardian: {
          include: {
            Students: true,
            // Payments: true,
            Enrollment: true,
          },
        },
      },
    });
    return guardian;
  }
}
