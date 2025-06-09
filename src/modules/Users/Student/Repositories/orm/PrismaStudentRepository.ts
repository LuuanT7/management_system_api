import { prisma } from "@shared/infra/database/prisma";
import { ICreateStudentDTO, } from "../../DTOS/IStudentDTO";
import { IStudentRepository } from "../IStudentRepository";

export class PrismaStudentRepository implements IStudentRepository {


    async create({ guardianId, userId, }: ICreateStudentDTO): Promise<ICreateStudentDTO> {
        const student = await prisma.student.create({
            data: {
                guardianId,
                userId
            }
        });
        return student;
    }

}