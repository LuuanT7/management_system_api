import { prisma } from "../../../../../shared/infra/prisma/client";
import { Activity } from "@prisma/client";

export class ListActivitiesUseCase {
  async execute(): Promise<Activity[]> {
    // Busca todas as atividades no banco
    const activities = await prisma.activity.findMany();
    return activities;
  }
}
