import { prisma } from '@shared/infra/database/prisma';
import { Enrollment } from '@prisma/client';

export interface IPaymentStatusRepository {
  listAll(): Promise<Enrollment[]>;
  findByStudentId(studentId: string): Promise<Enrollment[]>;
}

export class PaymentStatusRepository implements IPaymentStatusRepository {
  // Lista todas as matrículas (enrollments)
  async listAll(): Promise<Enrollment[]> {
    return prisma.enrollment.findMany({
      select: {
        id: true,
        classId: true,
        guardianId: true,
        paymentStatus: true,
        enrolledAt: true,
        paymentId: true,
        active: true,
        studentRA: true,
        createdAt: true
      },
    });
  }

  // Busca matrículas pelo userId do estudante (Student.userId)
  async findByStudentId(studentId: string): Promise<Enrollment[]> {
    const student = await prisma.student.findFirst({
      where: { userId: studentId },
    });

    if (!student) {
      return [];
    }

    return prisma.enrollment.findMany({
      where: { studentRA: student.ra },
      select: {
        id: true,
        classId: true,
        guardianId: true,
        paymentStatus: true,
        enrolledAt: true,
        paymentId: true,
        active: true,
        studentRA: true,
        createdAt: true
      },
    });
  }
}