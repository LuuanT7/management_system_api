import { IDashboardRepository } from '../repositories/IDashboardRepository';
import { IAverageAttendanceDTO } from '../dto/IAverageAttendanceDTO';

export class GetAverageAttendanceUseCase {
  constructor(private dashboardRepository: IDashboardRepository) {}

  async execute(teacherId: string): Promise<IAverageAttendanceDTO[]> {
    const performance = await this.dashboardRepository.getClassPerformanceByTeacher(teacherId);

    return performance.map(({ classId, className, averageAttendance }) => ({
      classId,
      className,
      averageAttendance,
    }));
  }
}