import { Activity } from "@prisma/client";
import { CreateActivityDTO } from "../../dtos/CreateActivityDTO";

export interface IActivityRepository {
  create(data: CreateActivityDTO): Promise<Activity>;
  findById(id: string): Promise<Activity | null>;
  listByClassId(classId: string): Promise<Activity[]>;
  delete(id: string): Promise<void>;
  updateScoreLimit(id: string, newMaxScore: number): Promise<Activity>;
  findAll(): Promise<Activity[]>; // adiciona este se for usar o ListActivitiesUseCase
}
