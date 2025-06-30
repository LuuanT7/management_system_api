import { Request, Response } from 'express';
import { GetClassPerformanceUseCase } from '../../../useCases/GetClassPerformanceUseCase';
import { GetAverageAttendanceUseCase } from '../../../useCases/GetAverageAttendanceUseCase';

export class DashboardController {
  constructor(
    private getClassPerformanceUseCase: GetClassPerformanceUseCase,
    private getAverageAttendanceUseCase: GetAverageAttendanceUseCase,
  ) {}

  async performance(req: Request, res: Response): Promise<Response> {
    try {
      const { teacherId } = req.params;
      const performance = await this.getClassPerformanceUseCase.execute(teacherId);
      return res.status(200).json(performance);
    } catch (error) {
      console.error('DashboardController performance error:', error);
      return res.status(500).json({ message: 'Internal server error.' });
    }
  }

  async attendance(req: Request, res: Response): Promise<Response> {
    try {
      const { teacherId } = req.params;
      const attendance = await this.getAverageAttendanceUseCase.execute(teacherId);
      return res.status(200).json(attendance);
    } catch (error) {
      console.error('DashboardController attendance error:', error);
      return res.status(500).json({ message: 'Internal server error.' });
    }
  }
}