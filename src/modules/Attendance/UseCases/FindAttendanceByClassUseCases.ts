import { IAttendanceDTO } from "../dtos/IAttendenceDTO";
import { IAttendanceRepository } from "../repositories/IAttendanceRepository"
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
export class FindAttendanceByClassUseCase {
    constructor(
        @inject("AttendanceRepository")
        private repository: IAttendanceRepository
    ) {}

    async execute(classId: string): Promise<IAttendanceDTO[]> {
        if (!classId) {
            throw new AppError("ID da turma é obrigatório.");
        }

        const attendances = await this.repository.findByClass(classId);

        if (attendances.length === 0) {
            throw new AppError("Nenhuma frequência encontrada para essa turma.", 404);
        }

        return attendances;
    }
}
