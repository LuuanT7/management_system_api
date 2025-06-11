import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/errors/AppError";
import { z } from "zod";
import { IEnrollmentRepository } from "../repositories/IEnrollmentRepository";
import { IUpdateEnrollmentDTO } from "../DTOS/IEnrollmentDTO";

const updateEnrollmentSchema = z.object({
    id: z.string({
        required_error: "ID da matrícula é obrigatório",
        invalid_type_error: "ID da matrícula deve ser uma string"
    }).uuid("ID da matrícula inválido"),

    paymentStatus: z.enum(["PENDING", "PAID", "OVERDUE"], {
        required_error: "Status do pagamento é obrigatório",
        invalid_type_error: "Status do pagamento inválido"
    }).optional(),

    paymentId: z.string().uuid("ID do pagamento inválido").optional(),
    active: z.boolean().optional()
}).required();

@injectable()
export class UpdateEnrollmentUseCase {
    constructor(
        @inject("EnrollmentRepository")
        private enrollmentRepository: IEnrollmentRepository
    ) { }

    async execute(data: IUpdateEnrollmentDTO) {
        try {
            const validatedData = updateEnrollmentSchema.parse(data);

            const enrollment = await this.enrollmentRepository.findById(validatedData.id);
            if (!enrollment) {
                throw new AppError("Matrícula não encontrada", 404);
            }

            const updatedEnrollment = await this.enrollmentRepository.update(validatedData);
            return updatedEnrollment;
        } catch (error) {
            console.error(error);
            if (error instanceof AppError) {
                throw error;
            }
            throw new AppError("Erro ao atualizar matrícula (UpdateEnrollmentUseCase)", 500);
        }
    }
} 