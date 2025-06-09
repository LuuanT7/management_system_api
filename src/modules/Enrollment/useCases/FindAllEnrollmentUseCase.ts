import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/errors/AppError";
import { IEnrollmentRepository } from "../repositories/IEnrollmentRepository";
import { IEnrollmentDTO } from "../DTOS/IEnrollmentDTO";

@injectable()
export class FindAllEnrollmentUseCase {
    constructor(
        @inject("EnrollmentRepository")
        private enrollmentRepository: IEnrollmentRepository
    ) { }

    async execute(): Promise<IEnrollmentDTO[]> {
        try {
            const enrollments = await this.enrollmentRepository.findAll();
            return enrollments;
        } catch (error) {
            console.error(error);
            throw new AppError("Erro ao buscar matrículas (FindAllEnrollmentUseCase)", 500);
        }
    }
} 