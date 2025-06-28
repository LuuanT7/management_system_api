import { IAttendanceRepository } from "../repositories/IAttendanceRepository";
import { ICreateAttendanceDTO } from "../dtos/IAttendenceDTO";
import { inject, injectable } from "tsyringe";
import { z } from "zod";
import { AppError } from "@shared/errors/AppError";


const createIattendenceSchema = z.object({
  studentId: z.string().uuid(),
  classId: z.string().uuid(),
  date: z.coerce.date(), // transforma string para Date
  present: z.boolean()
});

@injectable()
export class CreateAttendanceUseCase {
    constructor(
        @inject("IAttendanceRepository")
        private IAttendanceRepository: IAttendanceRepository
    ) { }

    async execute(data: ICreateAttendanceDTO) {
        try {
            const { studentId, classId, date, present } = createIattendenceSchema.parse(data);

            const Attendance = await this.IAttendanceRepository.create({
              studentId,
              classId,
              present,
              date
            });

            return Attendance;
        } catch (error) {
            console.error(error);
            throw new AppError("Erro ao criar matrícula (CreateEnrollmentUseCase)", 500);
        }
    }
} 