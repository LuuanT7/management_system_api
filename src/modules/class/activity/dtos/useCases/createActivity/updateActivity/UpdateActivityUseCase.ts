import { prisma } from "../../../../../shared/infra/prisma/client";
import { UpdateActivityDTO } from "../../dtos/UpdateActivityDTO";

export class UpdateActivityUseCase {
  async execute(data: UpdateActivityDTO) {
    const {
      id,
      title,
      description,
      dueDate,
      maxScore,
      type,
      weight,
    } = data;

    const activity = await prisma.activity.findUnique({
      where: { id },
    });

    if (!activity) {
      throw new Error("Atividade não encontrada.");
    }

    if (maxScore <= 0) {
      throw new Error("O valor máximo da atividade deve ser maior que zero.");
    }

    if (weight <= 0) {
      throw new Error("O peso da atividade deve ser maior que zero.");
    }

    const updatedActivity = await prisma.activity.update({
      where: { id },
      data: {
        title,
        description,
        dueDate,
        maxScore,
        type,
        weight,
      },
    });

    return updatedActivity;
  }
}
