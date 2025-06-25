// src/dtos/ICreateActivityDTO.ts
import { ActivityType } from "@prisma/client";

export interface ICreateActivityDTO {
  classId: string;
  title: string;
  description?: string;
  type: ActivityType;
  dueDate: Date;
  maxScore?: number;
}