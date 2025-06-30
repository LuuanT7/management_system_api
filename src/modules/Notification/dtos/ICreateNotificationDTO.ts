import { NotificationType, RelatedType } from "@prisma/client";

export interface ICreateNotificationDTO {
  userId: string; // correto
  title: string;
  message: string;
  type: NotificationType;
  relatedId?: string;
  relatedType?: RelatedType;
}
