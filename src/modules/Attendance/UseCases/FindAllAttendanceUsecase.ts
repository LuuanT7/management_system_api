import { IAttendanceRepository } from "../repositories/IAttendanceRepository";
import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/errors/AppError";
import { IAttendanceDTO } from "../dtos/IAttendenceDTO";

@injectable()
export class FindAllAttendanceUseCase {
    constructor(
        @inject("IAttendanceRepository")
        private AttendenceRepository: IAttendanceRepository
    ) { }

    async execute(): Promise<IAttendanceDTO[]> {
        try {
            const attendance = await this.AttendenceRepository.findAll();
            return attendance;
        } catch (error) {
            console.error(error);
            throw new AppError("Erro ao buscar matrículas (FindAllEnrollmentUseCase)", 500);
        }
    }
} 