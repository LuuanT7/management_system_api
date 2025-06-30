import { IGuardianDashboardRepository } from '../repositories/IGuardianDashboardRepository';
import { IAttendanceHistoryDTO } from '../dto/IAttendanceHistoryDTO';

export class GetAttendanceHistoryUseCase {
  constructor(private guardianDashboardRepository: IGuardianDashboardRepository) {}

  async execute(guardianId: string): Promise<IAttendanceHistoryDTO[]> {
    return this.guardianDashboardRepository.getAttendanceHistoryByGuardian(guardianId);
  }
}