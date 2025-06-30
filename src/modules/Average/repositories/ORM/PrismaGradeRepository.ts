import { Prisma } from "@prisma/client";
import { IGradeDTO } from "../../dtos/IGradeDTO";
import { IGradeRepository } from "../IGradeRepository";
import { prisma } from "@shared/infra/database/prisma";


export class PrismaGradeRepository implements IGradeRepository {
  async create(data: IGradeDTO): Promise<void> {
    await prisma.grade.create({
      data,
    });
  }

  async update(id: string, data: Partial<IGradeDTO>): Promise<void> {
    await prisma.grade.update({
      where: { id },
      data,
    });
  }

  async findAll(): Promise<IGradeDTO[]> {
    return await prisma.grade.findMany();
  }

  async findById(id: string): Promise<IGradeDTO | null> {
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
