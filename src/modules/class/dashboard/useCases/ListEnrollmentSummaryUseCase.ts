import { injectable } from 'tsyringe';
import { prisma } from '../../../../shared/infra/prisma/client';

@injectable()
export class ListEnrollmentSummaryUseCase {
  async execute() {
    const totalEnrollments = await prisma.enrollment.count();

    const enrollmentsByClass = await prisma.enrollment.groupBy({
      by: ['classId'],
      _count: true,
    });

    const rawEnrollments = await prisma.enrollment.findMany({
      select: {
        createdAt: true,
      },
    });

    const enrollmentsByMonth: Record<string, number> = {};

    for (const e of rawEnrollments) {
      const month = e.createdAt.toISOString().slice(0, 7); // "YYYY-MM"
      enrollmentsByMonth[month] = (enrollmentsByMonth[month] || 0) + 1;
    }

    return {
      totalEnrollments,
      enrollmentsByClass,
      enrollmentsByMonth,
    };
  }
}
