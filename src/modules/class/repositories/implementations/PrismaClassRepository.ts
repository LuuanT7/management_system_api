import { prisma } from "../../../../shared/infra/prisma/client";
import { IClassDTO } from "../../dtos/IClassDTO";
import { IClassRepository } from "../IClassRepository";

export class PrismaClassRepository implements IClassRepository {
  async create(data: IClassDTO): Promise<IClassDTO> {
    return await prisma.class.create({ data });
  }

  async findById(id: string): Promise<IClassDTO | null> {
    return await prisma.class.findUnique({ where: { id } });
  }

  async findAll(): Promise<IClassDTO[]> {
    return await prisma.class.findMany();
  }
}
