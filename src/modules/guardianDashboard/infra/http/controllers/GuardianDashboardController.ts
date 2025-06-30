import { Request, Response } from 'express';
import { GetAttendanceHistoryUseCase } from '../../../useCases/GetAttendanceHistoryUseCase';

export class GuardianDashboardController {
  constructor(private getAttendanceHistoryUseCase: GetAttendanceHistoryUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { guardianId } = req.params;
      const attendanceHistory = await this.getAttendanceHistoryUseCase.execute(guardianId);
      return res.status(200).json(attendanceHistory);
    } catch (error) {
      console.error('GuardianDashboardController Error:', error);
      return res.status(500).json({ message: 'Internal server error.' });
    }
  }
}