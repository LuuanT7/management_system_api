import { prisma } from '@shared/infra/database/prisma';
import { IGuardianDashboardRepository } from './IGuardianDashboardRepository';
import { IAttendanceHistoryDTO } from '../dto/IAttendanceHistoryDTO';

export class GuardianDashboardRepository implements IGuardianDashboardRepository {
  async getAttendanceHistoryByGuardian(guardianId: string): Promise<IAttendanceHistoryDTO[]> {
    // Buscar todas as turmas vinculadas aos estudantes desse guardião
    const students = await prisma.student.findMany({
      where: { guardianId },
      select: { ra: true }
    });

    if (students.length === 0) return [];

    const raList = students.map(s => s.ra);

    // Buscar presença dos estudantes nessas turmas
    const attendanceRecords = await prisma.attendance.findMany({
      where: {
        studentRA: { in: raList },
      },
      select: {
        classId: true,
        date: true,
        present: true,
        Class: {
          select: {
            name: true,
          }
        }
      },
      orderBy: { date: 'desc' },
      take: 100, // limitar para 100 registros por exemplo
    });

    return attendanceRecords.map(record => ({
      classId: record.classId,
      className: record.Class.name,
      date: record.date,
      present: record.present,
    }));
  }
}