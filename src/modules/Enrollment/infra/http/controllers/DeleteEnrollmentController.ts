import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteEnrollmentUseCase } from "@modules/Enrollment/useCases/DeleteEnrollmentUseCase";

export class DeleteEnrollmentController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        try {
            const deleteEnrollmentUseCase = container.resolve(DeleteEnrollmentUseCase);

            const result = await deleteEnrollmentUseCase.execute(id);

            return response.status(200).json({ message: result });
        } catch (error) {
            console.error(error);
            return response.status(500).json({ message: "Erro ao deletar matrícula" });
        }
    }
} 