import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateEnrollmentUseCase } from "@modules/Enrollment/useCases/UpdateEnrollmentUseCase";

export class UpdateEnrollmentController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { paymentStatus, paymentId, active } = request.body;

        try {
            const updateEnrollmentUseCase = container.resolve(UpdateEnrollmentUseCase);

            const enrollment = await updateEnrollmentUseCase.execute({
                id,
                paymentStatus,
                paymentId,
                active
            });

            return response.status(200).json(enrollment);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ message: "Erro ao atualizar matrícula" });
        }
    }
} 