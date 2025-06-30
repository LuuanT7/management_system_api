import { inject, injectable } from "tsyringe";
import { INotificationRepository } from "../repositories/INotificationRepository";
import { Notification } from "@prisma/client";

@injectable()
export class FindNotificationByIdUseCase {
  constructor(
    @inject("NotificationRepository")
    private notificationRepository: INotificationRepository
  ) {}

  async execute(id: string): Promise<Notification | null> {
    const notification = await this.notificationRepository.findById(id);
    return notification;
  }
}
