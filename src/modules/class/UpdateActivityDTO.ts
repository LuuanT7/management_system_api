import { ActivityType } from "../class/types/ActivityType";

export interface UpdateActivityDTO {
  id: string;
  title?: string;
  description?: string;
  dueDate?: Date;
  maxScore?: number;
  type?: ActivityType;
  weight?: number;
}
