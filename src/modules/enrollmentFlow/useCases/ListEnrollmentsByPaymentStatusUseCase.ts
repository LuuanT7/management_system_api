import { IEnrollmentFlowRepository } from '../repositories/IEnrollmentFlowRepository';
import { IEnrollmentResponseDTO } from '../dtos/IEnrollmentResponseDTO';

export class ListEnrollmentsByPaymentStatusUseCase {
  constructor(private enrollmentRepository: IEnrollmentFlowRepository) {}

  async execute(status: 'PAID' | 'PENDING'): Promise<IEnrollmentResponseDTO[]> {
    return this.enrollmentRepository.listByPaymentStatus(status);
  }
}
