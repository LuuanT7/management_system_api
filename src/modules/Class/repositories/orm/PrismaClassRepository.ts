import { prisma } from "@shared/infra/database/prisma";
import { IClassRepository } from "../IClassRepository";
import { IClassDTO, ICreateClassDTO } from "@modules/Class/DTOS/IClassDTO";

export class PrismaClassRepository implements IClassRepository {
    async findAll(): Promise<IClassDTO[]> {
        return
    }
    async findById(id: string): Promise<IClassDTO> {
        return
    }
    async create({ name, schedule, subject, teacherId }: ICreateClassDTO): Promise<ICreateClassDTO> {
        return
    }
}