import { Request, Response } from 'express';
import { GenerateGradeReportUseCase } from '../useCases/createActivity/gradeReport/GenerateGradeReportUseCase';

export class GradeReportController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { classId } = req.params;

    const generateGradeReportUseCase = new GenerateGradeReportUseCase();

    try {
      const report = await generateGradeReportUseCase.execute(classId);
      return res.status(200).json(report);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}
