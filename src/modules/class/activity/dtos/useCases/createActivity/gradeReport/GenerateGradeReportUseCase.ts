import { prisma } from "../../../../../../../shared/infra/prisma/client";

type StudentGrade = {
  studentId: string;
  studentName: string;
  average: number;
  status: "APROVADO" | "RECUPERAÇÃO" | "REPROVADO";
};

export class GenerateGradeReportUseCase {
  async execute(classId: string): Promise<StudentGrade[]> {
    // Buscar alunos da turma
    const students = await prisma.student.findMany({
      where: { classId },
      include: {
        grades: {
          include: {
            activity: true,
          },
        },
      },
    });

    const report: StudentGrade[] = students.map((student) => {
      let totalScore = 0;
      let totalWeight = 0;

      for (const grade of student.grades) {
        const activity = grade.activity;
        if (!activity || activity.maxScore === 0) continue;

        const normalizedScore = (grade.score / activity.maxScore) * activity.weight;
        totalScore += normalizedScore;
        totalWeight += activity.weight;
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
