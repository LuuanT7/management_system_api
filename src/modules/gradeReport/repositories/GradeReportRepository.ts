import { prisma } from '@shared/infra/database/prisma';
import { IGradeReportDTO } from '../dto/IGradeReportDTO';
import { IGradeReportRepository } from './IGradeReportRepository';

export class GradeReportRepository implements IGradeReportRepository {
  async listAll(): Promise<IGradeReportDTO[]> {
    return prisma.gradeReport.findMany();
  }

  async listByClassId(classId: string): Promise<IGradeReportDTO[]> {
    return prisma.gradeReport.findMany({
      where: { classId },
    });
  }

  async listByStudentRA(studentRA: number): Promise<IGradeReportDTO[]> {
    return prisma.gradeReport.findMany({
      where: { studentRA },
    });
  }
}
