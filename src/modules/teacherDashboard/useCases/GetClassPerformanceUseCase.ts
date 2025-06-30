import { IDashboardRepository } from '../repositories/IDashboardRepository';
import { IClassPerformanceDTO } from '../dto/IClassPerformanceDTO';

export class GetClassPerformanceUseCase {
  constructor(private dashboardRepository: IDashboardRepository) {}

  async execute(teacherId: string): Promise<IClassPerformanceDTO[]> {
    return this.dashboardRepository.getClassPerformanceByTeacher(teacherId);
  }
}