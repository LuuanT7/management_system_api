import { prisma } from "../../../../shared/infra/prisma/client";
import { CreateActivityDTO } from "../../CreateActivityDTO";

export class CreateActivityUseCase {
  async execute(data: CreateActivityDTO) {
    const {
      title,
      description,
      dueDate,
      maxScore,
      type,
      weight,
      teacherId,
      classId,
    } = data;

    const weightValue = weight ?? 1; // padrão 1 se undefined

    // Validação básica
    if (maxScore <= 0) {
      throw new Error("maxScore deve ser maior que 0");
    }

    if (weightValue <= 0) {
      throw new Error("weight deve ser maior que 0");
    }

    // Verificar se professor e turma existem (opcional, mas recomendável)
    const teacherExists = await prisma.teacher.findUnique({ where: { id: teacherId } });
    if (!teacherExists) {
      throw new Error("Professor não encontrado");
    }

    const classExists = await prisma.class.findUnique({ where: { id: classId } });
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
        weight: weightValue,
        type,
        teacherId,
        classId,
      },
    });

    return activity;
  }
}
