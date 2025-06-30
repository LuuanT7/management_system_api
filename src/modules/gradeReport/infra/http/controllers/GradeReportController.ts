import { Request, Response } from 'express';
import { ListClassAveragesUseCase } from '../../../useCases/ListClassAveragesUseCase';

export class GradeReportController {
  constructor(private listClassAveragesUseCase: ListClassAveragesUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { classId } = req.params;

      if (!classId) {
        return res.status(400).json({ message: 'classId is required' });
      }

      const averages = await this.listClassAveragesUseCase.execute(classId);
      return res.status(200).json(averages);
    } catch (error) {
      console.error('GradeReportController Error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}