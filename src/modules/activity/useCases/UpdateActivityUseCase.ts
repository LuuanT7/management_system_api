import { prisma } from "@shared/infra/database/prisma";
import { ActivityType } from '@prisma/client';

export interface IUpdateActivityDTO {
  title?: string;
  description?: string;
  dueDate?: Date | string;
  maxScore?: number;
  type?: ActivityType;
  weight?: number;
}

export class UpdateActivityUseCase {
  async execute(id: string, data: IUpdateActivityDTO) {
    const { title, description, dueDate, maxScore, type, weight } = data;

    // Verifica se a atividade existe
    const activity = await prisma.activity.findUnique({ where: { id } });
    if (!activity) {
      throw new Error("Atividade não encontrada.");
    }

    // Validações
    if (maxScore !== undefined && maxScore <= 0) {
      throw new Error("O valor máximo da atividade deve ser maior que zero.");
    }
    
    if (weight !== undefined && weight <= 0) {
      throw new Error("O peso da atividade deve ser maior que zero.");
    }

    // Converte dueDate para Date se for string
    const processedDueDate = dueDate !== undefined
      ? dueDate instanceof Date ? dueDate : new Date(dueDate)
      : undefined;

    // Atualiza a atividade
    const updatedActivity = await prisma.activity.update({
      where: { id },
      data: {
        title,
        description,
        dueDate: processedDueDate,
        maxScore,
        type,
      },
    });

    return updatedActivity;
  }
}