import { inject, injectable } from "tsyringe";
import { INotificationRepository } from "../repositories/INotificationRepository";
import { ICreateNotificationDTO } from "../dtos/ICreateNotificationDTO";
import { Notification } from "@prisma/client";

@injectable()
export class CreateNotificationUseCase {
  constructor(
    @inject("NotificationRepository")
    private notificationRepository: INotificationRepository
  ) {}

  async execute(data: ICreateNotificationDTO): Promise<Notification> {
    const notification = await this.notificationRepository.create(data);
    return notification;
  }
}
