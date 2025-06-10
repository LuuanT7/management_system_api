import { PrismaClient } from "@prisma/client";
import { IAttendanceDTO } from "../../dtos/IAttendenceDTO";
import { IAttendanceRepository } from "../IAttendanceRepository";



const prisma = new PrismaClient();

  export class PrismaAttendanceRepository implements IAttendanceRepository {
    findByStudentAndClass(studentId: string, classId: string): Promise<any | null> {
      throw new Error("Method not implemented.");
    }
    findAll(): Promise<any[]> {
      throw new Error("Method not implemented.");
    }

      async findById(id: string) {
    return await prisma.attendance.findUnique({
      where: { id },
    });
  }

  async delete(id: string) {
    return await prisma.attendance.delete({
      where: { id },
    });
  }

  async update(id: string, data: Partial<IAttendanceDTO>) {
    return await prisma.attendance.update({
      where: { id },
      data,
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

    async create(data: IAttendanceDTO): Promise<void> {
    await prisma.attendance.create({
      data: {
        studentId: data.studentId,
        classId: data.classId,
        date: new Date(data.date),
        present: data.present
      },
    });

  
  }
  

}
export const prismaAttendanceRepository = new PrismaAttendanceRepository();



