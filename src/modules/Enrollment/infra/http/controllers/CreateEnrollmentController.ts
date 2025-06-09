import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateEnrollmentUseCase } from "@modules/Enrollment/useCases/CreateEnrollmentUseCase";

export class CreateEnrollmentController {
    async handle(request: Request, response: Response) {
        const { studentId, classId, guardianId } = request.body;

        try {
            const createEnrollmentUseCase = container.resolve(CreateEnrollmentUseCase);

            const enrollment = await createEnrollmentUseCase.execute({
                studentId,
                classId,
                guardianId
            });

            return response.status(201).json(enrollment);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ message: "Erro ao criar matrícula" });
        }
    }
} 