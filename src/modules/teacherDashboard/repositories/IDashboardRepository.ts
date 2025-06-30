import { IClassPerformanceDTO } from '../dto/IClassPerformanceDTO';

export interface IDashboardRepository {
  getClassPerformanceByTeacher(teacherId: string): Promise<IClassPerformanceDTO[]>;
}
