import { IAttendanceRepository } from "../repositories/IAttendanceRepository";
import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/errors/AppError";
import { z } from "zod";

// Schema de validação do ID
const AttendenceSchema = z.object({
    id: z.string({
        required_error: "ID da matrícula é obrigatório",
        invalid_type_error: "ID da matrícula deve ser uma string"
    }).uuid("ID da matrícula inválido")
});

@injectable()
export class DeleteAttendenceUseCase {
    constructor(
        @inject("IAttendanceRepository")
        private IAttendanceRepository: IAttendanceRepository
    ) {}

    async execute(id: string): Promise<string> {
        try {
            // Fazendo a validação com Zod
            const { id: validatedId } = AttendenceSchema.parse({ id });

            // Busca se a matrícula existe
            const attendance = await this.IAttendanceRepository.findById(validatedId);
            if (!attendance) {
                throw new AppError("Matrícula não encontrada", 404);
            }

            // Deleta a matrícula
            await this.IAttendanceRepository.delete(validatedId);
            return "Matrícula deletada com sucesso";
        } catch (error) {
            console.error(error);
            if (error instanceof AppError) {
                throw error;
            }
            throw new AppError("Erro ao deletar matrícula (DeleteAttendanceUseCase)", 500);
        }
    }
}
