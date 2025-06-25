import { prisma } from "../../../../../../../shared/infra/prisma/client"
import { UpdateActivityDTO } from "../../../../../useCases/createActivity/updateActivity/UpdateActivityUseCase";
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

    if (maxScore !== undefined && maxScore <= 0) {
      throw new Error("O valor máximo da atividade deve ser maior que zero.");
    }

    if (weight !== undefined && weight <= 0) {
      throw new Error("O peso da atividade deve ser maior que zero.");
    }

    // Monta o objeto data apenas com campos definidos
    const dataToUpdate: any = {};

    if (title !== undefined) dataToUpdate.title = title;
    if (description !== undefined) dataToUpdate.description = description;
    if (dueDate !== undefined) dataToUpdate.dueDate = dueDate;
    if (maxScore !== undefined) dataToUpdate.maxScore = maxScore;
    if (weight !== undefined) dataToUpdate.weight = weight;
    if (type !== undefined) dataToUpdate.type = { set: type };

    const updatedActivity = await prisma.activity.update({
      where: { id },
      data: dataToUpdate,
    });

    return updatedActivity;
  }
}
