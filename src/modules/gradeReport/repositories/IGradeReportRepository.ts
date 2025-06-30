import { IGradeReportDTO } from '../dto/IGradeReportDTO';

export interface IGradeReportRepository {
  listAll(): Promise<IGradeReportDTO[]>;
  listByClassId(classId: string): Promise<IGradeReportDTO[]>;
  listByStudentRA(studentRA: number): Promise<IGradeReportDTO[]>;
  findById(id: string): Promise<IGradeReportDTO | null>;
  create(data: Omit<IGradeReportDTO, 'id' | 'createdAt' | 'updatedAt'>): Promise<IGradeReportDTO>;
  update(data: Partial<IGradeReportDTO> & { id: string }): Promise<IGradeReportDTO>;
  delete(id: string): Promise<void>;
}