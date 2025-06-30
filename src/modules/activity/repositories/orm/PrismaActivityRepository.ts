import { PrismaClient, Activity } from "@prisma/client";
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

  async listAll(): Promise<Activity[]> {
    return this.prisma.activity.findMany({
      orderBy: { createdAt: "desc" },
    });
  }

  async listByClassId(classId: string): Promise<Activity[]> {
    return this.prisma.activity.findMany({
      where: { classId },
      orderBy: { dueDate: "asc" },
    });
  }

  async listByStudentId(studentRA: number): Promise<Activity[]> {
    return this.prisma.activity.findMany({
      where: {
        Class: {
          Enrollments: {
            some: {
              studentRA: studentRA,
            },
          },
        },
      },
      orderBy: { dueDate: "asc" },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.activity.delete({
      where: { id },
    });
  }
}
