import { prisma } from '@shared/infra/database/prisma';
import { IDashboardRepository } from './IDashboardRepository';
import { IClassPerformanceDTO } from '../dto/IClassPerformanceDTO';

export class DashboardRepository implements IDashboardRepository {
  async getClassPerformanceByTeacher(teacherId: string): Promise<IClassPerformanceDTO[]> {
    if (!teacherId) {
      // Retorna array vazio caso teacherId seja falsy (evita erro e mantém tipo)
      return [];
    }

    const classes = await prisma.class.findMany({
      where: { teacherId },
    });

    if (!classes || classes.length === 0) {
      return [];
    }

    const results: IClassPerformanceDTO[] = [];

    for (const cls of classes) {
      const gradeAgg = await prisma.gradeReport.aggregate({
        _avg: { average: true },
        where: { classId: cls.id },
      });

      const totalAttendances = await prisma.attendance.count({
        where: { classId: cls.id },
      });

      const presentAttendances = await prisma.attendance.count({
        where: { classId: cls.id, present: true },
      });

      const averageAttendance = totalAttendances > 0 ? (presentAttendances / totalAttendances) * 100 : 0;

      results.push({
        classId: cls.id,
        className: cls.name,
        averageGrade: gradeAgg._avg.average ?? 0,
        averageAttendance,
      });
    }

    return results;
  }
}
