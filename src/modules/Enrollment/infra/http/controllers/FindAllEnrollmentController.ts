import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllEnrollmentUseCase } from "@modules/Enrollment/useCases/FindAllEnrollmentUseCase";

export class FindAllEnrollmentController {
    async handle(request: Request, response: Response) {
        try {
            const findAllEnrollmentUseCase = container.resolve(FindAllEnrollmentUseCase);

            const enrollments = await findAllEnrollmentUseCase.execute();

            return response.status(200).json(enrollments);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ message: "Erro ao buscar matrículas" });
        }
    }
} 