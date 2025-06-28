import { prisma } from "../../../../../shared/infra/prisma/client";

interface LaunchGradeDTO {
  studentId: string;
  activityId: string;
  score: number;
}

export class LaunchGradeUseCase {
  async execute(data: LaunchGradeDTO): Promise<void> {
    const { studentId, activityId, score } = data;

    const activity = await prisma.activity.findUnique({
      where: { id: activityId },
    });

    if (!activity) {
      throw new Error("Atividade não encontrada.");
    }

    if (score < 0 || score > activity.maxScore) {
      throw new Error(
        `Nota inválida. Deve estar entre 0 e ${activity.maxScore}.`
      );
    }

    // Verifica se já existe nota lançada
    const existingGrade = await prisma.grade.findFirst({
      where: {
        studentId,
        activityId,
      },
    });

    if (existingGrade) {
      // Atualiza nota
      await prisma.grade.update({
        where: { id: existingGrade.id },
        data: { score },
      });
    } else {
      // Cria nova nota
      await prisma.grade.create({
        data: {
          studentId,
          activityId,
          score,
        },
      });
    }
  }
}
