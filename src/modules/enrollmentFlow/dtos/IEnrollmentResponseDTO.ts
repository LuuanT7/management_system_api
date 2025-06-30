import { PaymentStatus as PrismaPaymentStatus } from '@prisma/client';


export interface IEnrollmentResponseDTO {
  enrollmentId: string;
  studentName: string;
  guardianName: string;
  className: string;
  enrolledAt: Date;
  paymentStatus: PrismaPaymentStatus; // <- aqui o fix
}

