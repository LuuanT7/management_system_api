import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/errors/AppError";
import { z } from "zod";
import { IAttendanceRepository } from "../repositories/IAttendanceRepository";
import { IAttendanceDTO } from "../dtos/IAttendenceDTO";

const updateAttendanceSchema = z.object({
    paymentStatus: z.enum(["PENDING", "PAID", "OVERDUE"], {
        required_error: "Status do pagamento é obrigatório",
        invalid_type_error: "Status do pagamento inválido"
    }).optional(),

    paymentId: z.string().uuid("ID do pagamento inválido").optional(),
    active: z.boolean().optional()
}).required();

@injectable()
export class UpdateAttendanceUseCase {
    constructor(
        @inject("IAttendanceRepository")
        private AttendanceRepository: IAttendanceRepository
    ) { }

    async execute(id: string, data: IAttendanceDTO) {
        try {
            // Valida o id separadamente
            if (!z.string().uuid().safeParse(id).success) {
                throw new AppError("ID da matrícula inválido", 400);
            }

            const validatedData = updateAttendanceSchema.parse(data);

            const Attendance = await this.AttendanceRepository.findById(id);
            if (!Attendance) {
                throw new AppError("Matrícula não encontrada", 404);
            }

            const updateAttendance = await this.AttendanceRepository.update({
                id,
                ...validatedData,
            });

            return updateAttendance;
        } catch (error) {
            console.error(error);
            if (error instanceof AppError) {
                throw error;
            }
            throw new AppError("Erro ao atualizar matrícula (UpdateAttendanceUseCase)", 500);
        }
    }
}
