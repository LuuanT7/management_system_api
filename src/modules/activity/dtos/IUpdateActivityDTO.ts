import { ActivityType } from "@prisma/client";

export interface IUpdateActivityDTO {
  id: string;
  title?: string;
  description?: string;
  dueDate?: Date;
  maxScore?: number;
  type?: ActivityType;
  classId?: string;
}