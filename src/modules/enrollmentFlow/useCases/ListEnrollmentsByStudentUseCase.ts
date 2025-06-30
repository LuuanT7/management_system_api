import { IEnrollmentFlowRepository } from '../repositories/IEnrollmentFlowRepository';
import { IEnrollmentResponseDTO } from '../dtos/IEnrollmentResponseDTO';

export class ListEnrollmentsByStudentUseCase {
  constructor(private enrollmentRepository: IEnrollmentFlowRepository) {}

  async execute(studentId: string): Promise<IEnrollmentResponseDTO[]> {
    return this.enrollmentRepository.listByStudentId(studentId);
  }
}
