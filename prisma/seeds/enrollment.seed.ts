import { PaymentStatus, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function CreateEnrollment() {
  const students = await prisma.student.findMany();
  const classes = await prisma.class.findMany();

  const enrollments = [
    {
      studentRA: students[0].ra,
      classId: classes[0].id,
      guardianId: students[0].guardianId,
      paymentStatus: 'PENDING',
      enrolledAt: new Date(),
      paymentId: null,
      active: false,
    },
    {
      studentRA: students[0].ra,
      classId: classes[1].id,
      guardianId: students[0].guardianId,
      paymentStatus: 'PENDING',
      enrolledAt: new Date(),
      paymentId: null,
      active: false,
    },
    {
      studentRA: students[0].ra,
      classId: classes[2].id,
      guardianId: students[0].guardianId,
      paymentStatus: 'PENDING',
      enrolledAt: new Date(),
      paymentId: null,
      active: false,
    },
    {
      studentRA: students[0].ra,
      classId: classes[3].id,
      guardianId: students[0].guardianId,
      paymentStatus: 'PENDING',
      enrolledAt: new Date(),
      paymentId: null,
      active: false,
    },
  ];

  await prisma.enrollment.createMany({
    data: enrollments.map((enrollment) => ({
      ...enrollment,
      paymentStatus: enrollment.paymentStatus as PaymentStatus,
    })),
  });
}
