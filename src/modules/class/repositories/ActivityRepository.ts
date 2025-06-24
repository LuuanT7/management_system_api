import { Activity as ActivityModel } from "@prisma/client";

import { CreateActivityDTO } from "../CreateActivityDTO";

export interface IActivityRepository {
  create(data: CreateActivityDTO): Promise<ActivityModel>;
  findById(id: string): Promise<ActivityModel | null>;
  listByClassId(classId: string): Promise<ActivityModel[]>;
  delete(id: string): Promise<void>;
  updateScoreLimit(id: string, newMaxScore: number): Promise<ActivityModel>;
  findAll(): Promise<ActivityModel[]>;
}

