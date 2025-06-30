import { inject, injectable } from "tsyringe";
import { INotificationRepository } from "../repositories/INotificationRepository";
import { Notification } from "@prisma/client";

@injectable()
export class ListNotificationsByUserIdUseCase {
  constructor(
    @inject("NotificationRepository")
    private notificationRepository: INotificationRepository
  ) {}

  async execute(userId: string): Promise<Notification[]> {
    const notifications = await this.notificationRepository.findByRecipient(userId);
    return notifications;
  }
}
