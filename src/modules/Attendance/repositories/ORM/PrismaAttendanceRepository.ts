import { PrismaClient } from "@prisma/client";
import { IAttendanceDTO } from "../../dtos/IAttendenceDTO";
import { IAttendanceRepository } from "../IAttendanceRepository";

const prisma = new PrismaClient();

export class PrismaAttendanceRepository implements IAttendanceRepository {
  async create(data: IAttendanceDTO): Promise<void> {
    await prisma.attendance.create({
      data: {
        studentId: data.studentId,
        classId: data.classId,
        date: data.date,
        present: data.present,
      },
    });
  }

  async findByStudentAndDate(studentId: string, date: Date): Promise<IAttendanceDTO | null> {
    return await prisma.attendance.findFirst({
      where: {
        studentId,
        date,
      },
    });
  }

  async listByClass(classId: string): Promise<IAttendanceDTO[]> {
    return await prisma.attendance.findMany({
      where: { classId },
    });
  }
}
