import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByIdEnrollmentUseCase } from "@modules/Enrollment/useCases/FindByIdEnrollmentUseCase";

export class FindByIdEnrollmentController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        try {
            const findByIdEnrollmentUseCase = container.resolve(FindByIdEnrollmentUseCase);

            const enrollment = await findByIdEnrollmentUseCase.execute(id);

            return response.status(200).json(enrollment);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ message: "Erro ao buscar matrícula" });
        }
    }
} 