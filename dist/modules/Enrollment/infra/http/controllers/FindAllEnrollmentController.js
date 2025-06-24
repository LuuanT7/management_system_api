"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllEnrollmentController = void 0;
const tsyringe_1 = require("tsyringe");
const FindAllEnrollmentUseCase_1 = require("@modules/Enrollment/useCases/FindAllEnrollmentUseCase");
class FindAllEnrollmentController {
    async handle(request, response) {
        try {
            const findAllEnrollmentUseCase = tsyringe_1.container.resolve(FindAllEnrollmentUseCase_1.FindAllEnrollmentUseCase);
            const enrollments = await findAllEnrollmentUseCase.execute();
            return response.status(200).json(enrollments);
        }
        catch (error) {
            console.error(error);
            return response.status(500).json({ message: "Erro ao buscar matrículas" });
        }
    }
}
exports.FindAllEnrollmentController = FindAllEnrollmentController;
