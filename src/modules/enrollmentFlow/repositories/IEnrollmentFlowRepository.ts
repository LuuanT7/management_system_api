import { ICreateEnrollmentDTO } from '../dtos/ICreateEnrollmentDTO';
import { IEnrollmentResponseDTO } from '../dtos/IEnrollmentResponseDTO';

export interface IEnrollmentFlowRepository {
  createEnrollment(data: ICreateEnrollmentDTO): Promise<IEnrollmentResponseDTO>;
  listByStudentId(studentId: string): Promise<IEnrollmentResponseDTO[]>;
  listByClassId(classId: string): Promise<IEnrollmentResponseDTO[]>;
  listByPaymentStatus(status: 'PAID' | 'PENDING'): Promise<IEnrollmentResponseDTO[]>;
}
