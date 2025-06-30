import { IEnrollmentFlowRepository } from '../repositories/IEnrollmentFlowRepository';
import { IEnrollmentResponseDTO } from '../dtos/IEnrollmentResponseDTO';

export class ListEnrollmentsByClassUseCase {
  constructor(private enrollmentRepository: IEnrollmentFlowRepository) {}

  async execute(classId: string): Promise<IEnrollmentResponseDTO[]> {
    return this.enrollmentRepository.listByClassId(classId);
  }
}
