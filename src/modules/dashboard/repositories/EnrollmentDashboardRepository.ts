import { injectable } from 'tsyringe';
import { prisma } from '@shared/infra/database/prisma';

@injectable()
export class ListEnrollmentSummaryUseCase {
  
  async execute() {
    // Total de matrículas
    const totalEnrollments = await prisma.enrollment.count();

    // Matrículas agrupadas por turma
    const enrollmentsByClass = await prisma.enrollment.groupBy({
      by: ['classId'],
      _count: {
        _all: true,
      },
    });

    // Busca todas matrículas para agrupar por mês de criação
    const enrollments = await prisma.enrollment.findMany({
      select: {
        createdAt: true,
      },
    });

    // Agrupa matrículas por mês (YYYY-MM)
    const enrollmentsByMonth: Record<string, number> = {};

    for (const enrollment of enrollments) {
      const month = enrollment.createdAt.toISOString().slice(0, 7);
      enrollmentsByMonth[month] = (enrollmentsByMonth[month] || 0) + 1;
    }

    return {
      totalEnrollments,
      enrollmentsByClass,
      enrollmentsByMonth,
    };
  }
}
