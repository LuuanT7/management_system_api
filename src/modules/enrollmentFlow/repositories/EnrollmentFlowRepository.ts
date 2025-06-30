import { prisma } from '@shared/infra/database/prisma';
import { IEnrollmentFlowRepository } from '../repositories/IEnrollmentFlowRepository';
import { ICreateEnrollmentDTO } from '../dtos/ICreateEnrollmentDTO';
import { IEnrollmentResponseDTO } from '../dtos/IEnrollmentResponseDTO';
import { PaymentStatus } from '@prisma/client';

export class EnrollmentFlowRepository implements IEnrollmentFlowRepository {
  async createEnrollment(data: ICreateEnrollmentDTO): Promise<IEnrollmentResponseDTO> {
    const guardianUser = await prisma.user.upsert({
      where: { email: data.guardian.email },
      update: {},
      create: {
        name: data.guardian.name,
        email: data.guardian.email,
        phone: data.guardian.phone,
        role: 'GUARDIAN',
        password: 'default123',
      },
    });

    // Buscar guardião pelo id (que é chave primária) ao invés de userId que não é unique para findUnique
    let guardian = await prisma.guardian.findUnique({
      where: { id: guardianUser.id },  // ALTERAÇÃO AQUI
    });

    if (!guardian) {
      guardian = await prisma.guardian.create({
        data: { userId: guardianUser.id },
      });
    }

    const studentUser = await prisma.user.upsert({
      where: { email: data.student.email },
      update: {},
      create: {
        name: data.student.name,
        email: data.student.email,
        birthDate: data.student.birthDate,
        role: 'STUDENT',
        password: 'default123',
      },
    });

    const student = await prisma.student.upsert({
      where: { userId: studentUser.id },
      update: { guardianId: guardian.id },
      create: {
        userId: studentUser.id,
        guardianId: guardian.id,
      },
    });

    const enrollment = await prisma.enrollment.create({
      data: {
        classId: data.classId,
        guardianId: guardian.id,
        studentRA: student.ra,
        paymentStatus: data.initialPaymentStatus as PaymentStatus,  // Garante o tipo enum
        enrolledAt: new Date(),
        active: true,
      },
      include: {
        Student: { include: { User: true } },
        Guardian: { include: { User: true } },
        Class: true,
      },
    });

    return {
      enrollmentId: enrollment.id,
      studentName: enrollment.Student.User.name,
      guardianName: enrollment.Guardian.User.name,
      className: enrollment.Class.name,
      enrolledAt: enrollment.enrolledAt,
      paymentStatus: enrollment.paymentStatus,
    };
  }

  async listByStudentId(studentId: string): Promise<IEnrollmentResponseDTO[]> {
    const student = await prisma.student.findUnique({
      where: { userId: studentId },
    });
    if (!student) return [];

    const enrollments = await prisma.enrollment.findMany({
      where: { studentRA: student.ra },
      include: {
        Student: { include: { User: true } },
        Guardian: { include: { User: true } },
        Class: true,
      },
    });

    return enrollments.map(enrollment => ({
      enrollmentId: enrollment.id,
      studentName: enrollment.Student.User.name,
      guardianName: enrollment.Guardian.User.name,
      className: enrollment.Class.name,
      enrolledAt: enrollment.enrolledAt,
      paymentStatus: enrollment.paymentStatus,
    }));
  }

  async listByClassId(classId: string): Promise<IEnrollmentResponseDTO[]> {
    const enrollments = await prisma.enrollment.findMany({
      where: { classId },
      include: {
        Student: { include: { User: true } },
        Guardian: { include: { User: true } },
        Class: true,
      },
    });

    return enrollments.map(enrollment => ({
      enrollmentId: enrollment.id,
      studentName: enrollment.Student.User.name,
      guardianName: enrollment.Guardian.User.name,
      className: enrollment.Class.name,
      enrolledAt: enrollment.enrolledAt,
      paymentStatus: enrollment.paymentStatus,
    }));
  }

  async listByPaymentStatus(status: PaymentStatus): Promise<IEnrollmentResponseDTO[]> {
    const enrollments = await prisma.enrollment.findMany({
      where: { paymentStatus: status },
      include: {
        Student: { include: { User: true } },
        Guardian: { include: { User: true } },
        Class: true,
      },
    });

    return enrollments.map(enrollment => ({
      enrollmentId: enrollment.id,
      studentName: enrollment.Student.User.name,
      guardianName: enrollment.Guardian.User.name,
      className: enrollment.Class.name,
      enrolledAt: enrollment.enrolledAt,
      paymentStatus: enrollment.paymentStatus,
    }));
  }
}
