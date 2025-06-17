import { IAttendanceRepository } from "../repositories/IAttendanceRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { z } from "zod";
import { IAttendanceDTO } from "../dtos/IAttendenceDTO";

const findByIdSchema = z.object({
    id: z.string({
        required_error: "ID da matrícula é obrigatório",
        invalid_type_error: "ID da matrícula deve ser uma string"
    }).uuid("ID da matrícula inválido")
});

@injectable()
export class FindByIdAttendanceUseCase {
    constructor(
        @inject("IAttendanceRepository")
        private AttendanceRepository: IAttendanceRepository
    ) { }

    async execute(id: string): Promise<IAttendanceDTO> {
        try {
            const { id: validatedId } = findByIdSchema.parse({ id });
            const attendance = await this.AttendanceRepository.findById(validatedId);

            if (!attendance) {
                throw new AppError("Matrícula não encontrada", 404);
            }

            return attendance;
        } catch (error) {
            console.error(error);
            if (error instanceof AppError) {
                throw error;
            }
            throw new AppError("Erro ao buscar matrícula por ID (FindByIdEnrollmentUseCase)", 500);
        }
    }
} 