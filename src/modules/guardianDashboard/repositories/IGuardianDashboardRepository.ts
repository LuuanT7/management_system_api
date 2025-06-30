import { IAttendanceHistoryDTO } from '../dto/IAttendanceHistoryDTO';

export interface IGuardianDashboardRepository {
  getAttendanceHistoryByGuardian(guardianId: string): Promise<IAttendanceHistoryDTO[]>;
}