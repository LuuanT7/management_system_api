import { inject, injectable } from "tsyringe";
import { z } from "zod";
import { AppError } from "@shared/errors/AppError";
import { IEnrollmentRepository } from "../repositories/IEnrollmentRepository";
import { ICreateEnrollmentDTO } from "../DTOS/IEnrollmentDTO";
import { PaymentStatus } from "@prisma/client";

const createEnrollmentSchema = z.object({
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
    paymentStatus: z.nativeEnum(PaymentStatus).optional(),
    active: z.boolean().optional(),
    paymentId: z.string().optional(),
}).required().strict();

@injectable()
export class CreateEnrollmentUseCase {
    constructor(
        @inject("EnrollmentRepository")
        private enrollmentRepository: IEnrollmentRepository
    ) { }

    async execute(data: ICreateEnrollmentDTO) {
        try {
            const { studentId, classId, guardianId } = createEnrollmentSchema.parse(data);

            const enrollment = await this.enrollmentRepository.create({
                studentId,
                classId,
                guardianId,
                paymentStatus: data.paymentStatus,
                active: data.active,
                paymentId: data.paymentId,
            });

            return enrollment;
        } catch (error) {
            console.error(error);
            throw new AppError("Erro ao criar matrícula (CreateEnrollmentUseCase)", 500);
        }
    }
} 