import { IPaymentStatusRepository } from '../repositories/PaymentStatusRepository';
import { PaymentStatus } from '@prisma/client';

export class ListPaymentStatusesUseCase {
  constructor(private paymentStatusRepo: IPaymentStatusRepository) {}

  async execute(studentId: string): Promise<PaymentStatus[]> {
    const enrollments = await this.paymentStatusRepo.findByStudentId(studentId);
    return enrollments.map(enrollment => enrollment.paymentStatus);
  }
}
