import { IEnrollmentFlowRepository } from '../repositories/IEnrollmentFlowRepository';
import { ICreateEnrollmentDTO } from '../dtos/ICreateEnrollmentDTO';
import { IEnrollmentResponseDTO } from '../dtos/IEnrollmentResponseDTO';

export class CreateEnrollmentUseCase {
  constructor(private enrollmentRepository: IEnrollmentFlowRepository) {}

  async execute(data: ICreateEnrollmentDTO): Promise<IEnrollmentResponseDTO> {
    const enrollment = await this.enrollmentRepository.createEnrollment(data);
    return enrollment;
  }
}
