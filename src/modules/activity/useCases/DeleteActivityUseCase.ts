import { prisma } from "@shared/infra/database/prisma";
export class DeleteActivityUseCase {
  async execute(id: string): Promise<void> {
    const activity = await prisma.activity.findUnique({
      where: { id },
    });

    if (!activity) {
      throw new Error("Atividade não encontrada.");
    }

    await prisma.activity.delete({
      where: { id },
    });
  }
}
