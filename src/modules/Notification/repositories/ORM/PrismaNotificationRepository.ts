import { prisma } from "@shared/infra/database/prisma";
import { INotificationRepository } from "../INotificationRepository";
import { ICreateNotificationDTO } from "../../dtos/ICreateNotificationDTO";
import { Notification } from "@prisma/client";

export class PrismaNotificationRepository implements INotificationRepository {
  async create(data: ICreateNotificationDTO): Promise<Notification> {
    const notification = await prisma.notification.create({
        data: {
        user: {
            connect: {
                id: data.userId, 
            },
        },
        type: data.type,
        title: data.title,
        message: data.message,
        relatedId: data.relatedId,       
        relatedType: data.relatedType,   
  },
});

    return notification;
  }

    async findByRecipient(userId: string): Promise<Notification[]> {
    const notifications = await prisma.notification.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
    });

    return notifications;
    }

    async findById(id: string): Promise<Notification | null> {
        const notification = await prisma.notification.findUnique({
            where: { id },
        });
    return notification;
  }
}

