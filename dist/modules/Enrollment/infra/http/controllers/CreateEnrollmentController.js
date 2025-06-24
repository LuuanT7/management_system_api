"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEnrollmentController = void 0;
const tsyringe_1 = require("tsyringe");
const CreateEnrollmentUseCase_1 = require("@modules/Enrollment/useCases/CreateEnrollmentUseCase");
class CreateEnrollmentController {
    async handle(request, response) {
        const { studentId, classId, guardianId } = request.body;
        try {
            const createEnrollmentUseCase = tsyringe_1.container.resolve(CreateEnrollmentUseCase_1.CreateEnrollmentUseCase);
            const enrollment = await createEnrollmentUseCase.execute({
                studentId,
                classId,
                guardianId
            });
            return response.status(201).json(enrollment);
        }
        catch (error) {
            console.error(error);
            return response.status(500).json({ message: "Erro ao criar matrícula" });
        }
    }
}
exports.CreateEnrollmentController = CreateEnrollmentController;
