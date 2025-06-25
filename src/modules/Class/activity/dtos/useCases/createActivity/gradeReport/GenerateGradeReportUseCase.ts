import { prisma } from '../../../../../../../shared/infra/prisma/client';

type StudentGrade = {
  studentId: string;
  studentName: string;
  average: number;
  status: "APROVADO" | "RECUPERAÇÃO" | "REPROVADO";
};

export class GenerateGradeReportUseCase {
  async execute(classId: string): Promise<StudentGrade[]> {
    const enrollments = await prisma.enrollment.findMany({
      where: { classId },
      include: {
        student: {
          include: {
            grades: {
              include: {
                activity: true,
              },
            },
          },
        },
      },
    });

    // Definindo o tipo explícito para ajudar o TS a não inferir any
    type EnrollmentWithRelations = typeof enrollments[number];

    const report: StudentGrade[] = enrollments.map(({ student }: EnrollmentWithRelations) => {
      let totalScore = 0;
      let totalWeight = 0;

      for (const grade of student.grades) {
        const activity = grade.activity;
        if (!activity || activity.maxScore === 0) continue;

        const normalizedScore = (grade.score / activity.maxScore) * (activity.weight ?? 1);
        totalScore += normalizedScore;
        totalWeight += activity.weight ?? 1;
      }

      const average = totalWeight > 0 ? (totalScore / totalWeight) * 100 : 0;

      let status: StudentGrade["status"] = "REPROVADO";
      if (average >= 70) {
        status = "APROVADO";
      } else if (average >= 50) {
        status = "RECUPERAÇÃO";
      }

      return {
        studentId: student.id,
        studentName: student.name,
        average: parseFloat(average.toFixed(2)),
        status,
      };
    });

    return report;
  }
}
