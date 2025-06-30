import { IAttendanceHistoryDTO } from '../dtos/IAttendanceHistoryDTO';

export interface IGuardianDashboardRepository {
  getAttendanceHistoryByGuardian(guardianId: string): Promise<IAttendanceHistoryDTO[]>;
}
