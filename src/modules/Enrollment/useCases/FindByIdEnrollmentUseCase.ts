import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/errors/AppError";
import { z } from "zod";
import { IEnrollmentRepository } from "../repositories/IEnrollmentRepository";
import { IEnrollmentDTO } from "../DTOS/IEnrollmentDTO";

const findByIdSchema = z.object({
    id: z.string({
        required_error: "ID da matrícula é obrigatório",
        invalid_type_error: "ID da matrícula deve ser uma string"
    }).uuid("ID da matrícula inválido")
});

@injectable()
export class FindByIdEnrollmentUseCase {
    constructor(
        @inject("EnrollmentRepository")
        private enrollmentRepository: IEnrollmentRepository
    ) { }

    async execute(id: string): Promise<IEnrollmentDTO> {
        try {
            const { id: validatedId } = findByIdSchema.parse({ id });
            const enrollment = await this.enrollmentRepository.findById(validatedId);

            if (!enrollment) {
                throw new AppError("Matrícula não encontrada", 404);
            }

            return enrollment;
        } catch (error) {
            console.error(error);
            if (error instanceof AppError) {
                throw error;
            }
            throw new AppError("Erro ao buscar matrícula por ID (FindByIdEnrollmentUseCase)", 500);
        }
    }
} 