import { IAttendanceDTO, IUpdateAttendanceDTO, ICreateAttendanceDTO } from "../../dtos/IAttendenceDTO";
import { IAttendanceRepository } from "../IAttendanceRepository";
import { prisma } from "@shared/infra/database/prisma";

export class PrismaAttendanceRepository implements IAttendanceRepository {
    async findAll(): Promise<IAttendanceDTO[]> {
        const attendance = await prisma.attendance.findMany();
        return attendance as IAttendanceDTO[];
    }

    async findById(id: string): Promise<IAttendanceDTO> {
        const attendance = await prisma.attendance.findUnique({ where: { id } });
        return attendance as IAttendanceDTO;
    }

    async findByStudentId(studentId: string): Promise<IAttendanceDTO[]> {
        const attendance = await prisma.attendance.findMany({ where: { studentId } });
        return attendance as IAttendanceDTO[];
    }

    async findByClassId(classId: string): Promise<IAttendanceDTO[]> {
        const attendance = await prisma.attendance.findMany({ where: { classId } });
        return attendance as IAttendanceDTO[];
    }

    async create({ studentId, classId, date }: ICreateAttendanceDTO): Promise<IAttendanceDTO> {
        const attendance = await prisma.attendance.create({
            data: {
                studentId,
                classId,
                date,
            }
        });
        return attendance as IAttendanceDTO;
    }

    async update({ id, present }: IUpdateAttendanceDTO): Promise<IAttendanceDTO> {
        const attendance = await prisma.attendance.update({
            where: { id },
            data: {
                present
            }
        });
        return attendance as IAttendanceDTO;
    }

    async delete(id: string): Promise<string> {
        await prisma.attendance.delete({
            where: { id }
        });
        return id;
    }
}

export const prismaAttendanceRepository = new PrismaAttendanceRepository();
