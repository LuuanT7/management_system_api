import { IAttendanceRepository } from "../repositories/IAttendanceRepository";
import { IAttendanceDTO } from "../dtos/IAttendenceDTO";
import { inject, injectable } from "tsyringe";
import { z } from "zod";
import { AppError } from "@shared/errors/AppError";


const createIattendenceSchema = z.object({
    studentId: z.string({
        required_error: "ID do estudante é obrigatório",
        invalid_type_error: "ID do estudante deve ser uma string"
    }).uuid("ID do estudante inválido"),

    classId: z.string({
        required_error: "ID da turma é obrigatório",
        invalid_type_error: "ID da turma deve ser uma string"
    }).uuid("ID da turma inválido"),

    guardianId: z.string({
        required_error: "ID do responsável é obrigatório",
        invalid_type_error: "ID do responsável deve ser uma string"
    }).uuid("ID do responsável inválido"),
}).required().strict();

@injectable()
export class CreateIattendeceUseCase {
    constructor(
        @inject("IAttendanceRepository")
        private IAttendanceRepository: IAttendanceRepository
    ) { }

    async execute(data: IAttendanceDTO) {
        try {
            const { studentId, classId } = createIattendenceSchema.parse(data);

            const Attendance = await this.IAttendanceRepository.create({
              studentId,
              classId,
              present: true,
              date: undefined
            });

            return Attendance;
        } catch (error) {
            console.error(error);
            throw new AppError("Erro ao criar matrícula (CreateEnrollmentUseCase)", 500);
        }
    }
} 