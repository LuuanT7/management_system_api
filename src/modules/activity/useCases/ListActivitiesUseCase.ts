import { Activity } from "@prisma/client";
import { IActivityRepository } from "../repositories/IActivityRepository";

export class ListActivitiesUseCase {
  constructor(private activityRepository: IActivityRepository) {}

  async execute(): Promise<Activity[]> {
    return this.activityRepository.listAll();
  }
}