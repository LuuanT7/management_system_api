import { IGradeReportDTO } from '../dto/IGradeReportDTO';

export interface IGradeReportRepository {
  listAll(): Promise<IGradeReportDTO[]>;
  listByClassId(classId: string): Promise<IGradeReportDTO[]>;
  listByStudentRA(studentRA: number): Promise<IGradeReportDTO[]>;
}
