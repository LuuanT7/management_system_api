import { prisma } from "@shared/infra/database/prisma";
import { ActivityType } from "@prisma/client";
import { ICreateActivityDTO } from "../dtos/ICreateActivityDTO";

export class CreateActivityUseCase {
  async execute(data: ICreateActivityDTO) {
    const {
      title,
      description,
      dueDate,
      maxScore,
      type,
      classId,
    } = data;

    // Validação básica
    if (maxScore <= 0) {
      throw new Error("maxScore deve ser maior que 0");
    }

    // Verificar se o tipo de atividade é válido
    if (!Object.values(ActivityType).includes(type)) {
      throw new Error(`Tipo de atividade inválido. Use: ${Object.values(ActivityType).join(', ')}`);
    }

    // Verificar se a turma existe
    const classExists = await prisma.class.findUnique({ 
      where: { id: classId },
      include: { teacher: true }
    });
    
    if (!classExists) {
      throw new Error("Turma não encontrada");
    }

    // Criação da atividade
    const activity = await prisma.activity.create({
      data: {
        title,
        description,
        dueDate: new Date(dueDate),
        maxScore,
        type,
        classId,
      },
    });

    return activity;
  }
}