import { Request, Response } from 'express';
import { CreateEnrollmentUseCase } from '../../../useCases/CreateFullEnrollmentUseCase';
import { ListEnrollmentsByStudentUseCase } from '../../../useCases/ListEnrollmentsByStudentUseCase';
import { ListEnrollmentsByClassUseCase } from '../../../useCases/ListEnrollmentsByClassUseCase';
import { ListEnrollmentsByPaymentStatusUseCase } from '../../../useCases/ListEnrollmentsByPaymentStatusUseCase';

export class EnrollmentFlowController {
  constructor(
    private createEnrollmentUseCase: CreateEnrollmentUseCase,
    private listByStudentUseCase: ListEnrollmentsByStudentUseCase,
    private listByClassUseCase: ListEnrollmentsByClassUseCase,
    private listByStatusUseCase: ListEnrollmentsByPaymentStatusUseCase
  ) {}

  async create(req: Request, res: Response) {
    const data = req.body;

    const result = await this.createEnrollmentUseCase.execute(data);
    return res.status(201).json(result);
  }

  async listByStudent(req: Request, res: Response) {
    const { studentId } = req.params;

    const result = await this.listByStudentUseCase.execute(studentId);
    return res.json(result);
  }

  async listByClass(req: Request, res: Response) {
    const { classId } = req.params;

    const result = await this.listByClassUseCase.execute(classId);
    return res.json(result);
  }

  async listByPaymentStatus(req: Request, res: Response) {
    const { status } = req.params;

    const result = await this.listByStatusUseCase.execute(status as 'PAID' | 'PENDING');
    return res.json(result);
  }
}