import { PrismaClient, Activity, ActivityType } from "@prisma/client";
import { ICreateActivityDTO } from "../../dtos/ICreateActivityDTO";

export class PrismaActivityRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(data: ICreateActivityDTO): Promise<Activity> {
    const activity = await this.prisma.activity.create({
      data: {
        classId: data.classId,
        title: data.title,
        description: data.description,
        type: data.type,
        dueDate: data.dueDate,
        maxScore: data.maxScore || 10.0,
      },
    });

    return activity;
  }

  async findById(id: string): Promise<Activity | null> {
    return this.prisma.activity.findUnique({
      where: { id },
    });
  }

  async findByClass(classId: string): Promise<Activity[]> {
    return this.prisma.activity.findMany({
      where: { classId },
      orderBy: { dueDate: 'asc' },
    });
  }

  async update(id: string, data: Partial<ICreateActivityDTO>): Promise<Activity> {
    return this.prisma.activity.update({
      where: { id },
      data: {
        title: data.title,
        description: data.description,
        type: data.type,
        dueDate: data.dueDate,
        maxScore: data.maxScore,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.activity.delete({
      where: { id },
    });
  }

  async listAll(): Promise<Activity[]> {
    return this.prisma.activity.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }
}