import { prisma } from '@shared/infra/database/prisma';
import { IGradeReportDTO } from '../dto/IGradeReportDTO';
import { IGradeReportRepository } from './IGradeReportRepository';

export class GradeReportRepository implements IGradeReportRepository {
  async listAll(): Promise<IGradeReportDTO[]> {
    return prisma.gradeReport.findMany();
  }

  async listByClassId(classId: string): Promise<IGradeReportDTO[]> {
    return prisma.gradeReport.findMany({ where: { classId } });
  }

  async listByStudentRA(studentRA: number): Promise<IGradeReportDTO[]> {
    return prisma.gradeReport.findMany({ where: { studentRA } });
  }

  async findById(id: string): Promise<IGradeReportDTO | null> {
    return prisma.gradeReport.findUnique({ where: { id } });
  }

  async create(data: Omit<IGradeReportDTO, 'id' | 'createdAt' | 'updatedAt'>): Promise<IGradeReportDTO> {
    return prisma.gradeReport.create({ data });
  }

  async update(data: Partial<IGradeReportDTO> & { id: string }): Promise<IGradeReportDTO> {
    const { id, ...rest } = data;
    return prisma.gradeReport.update({
      where: { id },
      data: rest,
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.gradeReport.delete({ where: { id } });
  }
}