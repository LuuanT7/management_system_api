import { Prisma } from "@prisma/client";
import { IGradeAverageDTO } from "../../dtos/IGradeAverageDTO";
import { IGradeAverageRepository } from "../IGradeAverageRepository";
import { prisma } from "@shared/infra/database/prisma";


export class PrismaGradeRepository implements IGradeAverageRepository {
  async create(data: IGradeAverageDTO): Promise<void> {
    await prisma.grade.create({
      data,
    });
  }

  async update(id: string, data: Partial<IGradeAverageDTO>): Promise<void> {
    await prisma.grade.update({
      where: { id },
      data,
    });
  }

  async findAll(): Promise<IGradeAverageDTO[]> {
    return await prisma.grade.findMany();
  }

  async findById(id: string): Promise<IGradeAverageDTO | null> {
    return await prisma.grade.findUnique({
      where: { id },
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.grade.delete({
      where: { id },
    });
  }
}
