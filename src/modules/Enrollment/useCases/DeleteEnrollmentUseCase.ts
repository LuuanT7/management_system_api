import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/errors/AppError";
import { z } from "zod";
import { IEnrollmentRepository } from "../repositories/IEnrollmentRepository";

const deleteEnrollmentSchema = z.object({
    id: z.string({
        required_error: "ID da matrícula é obrigatório",
        invalid_type_error: "ID da matrícula deve ser uma string"
    }).uuid("ID da matrícula inválido")
});

@injectable()
export class DeleteEnrollmentUseCase {
    constructor(
        @inject("EnrollmentRepository")
        private enrollmentRepository: IEnrollmentRepository
    ) { }

    async execute(id: string): Promise<string> {
        try {
            const { id: validatedId } = deleteEnrollmentSchema.parse({ id });

            const enrollment = await this.enrollmentRepository.findById(validatedId);
            if (!enrollment) {
                throw new AppError("Matrícula não encontrada", 404);
            }

            await this.enrollmentRepository.delete(validatedId);
            return "Matrícula deletada com sucesso";
        } catch (error) {
            console.error(error);
            if (error instanceof AppError) {
                throw error;
            }
            throw new AppError("Erro ao deletar matrícula (DeleteEnrollmentUseCase)", 500);
        }
    }
} 