import { Notification } from "@prisma/client";
import { ICreateNotificationDTO } from "../dtos/ICreateNotificationDTO";

export interface INotificationRepository {
  create(data: ICreateNotificationDTO): Promise<Notification>;
  findById(id: string): Promise<Notification | null>;
  findByRecipient(recipientId: string): Promise<Notification[]>;
}
