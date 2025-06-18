"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindByIdEnrollmentController = void 0;
const tsyringe_1 = require("tsyringe");
const FindByIdEnrollmentUseCase_1 = require("@modules/Enrollment/useCases/FindByIdEnrollmentUseCase");
class FindByIdEnrollmentController {
    async handle(request, response) {
        const { id } = request.params;
        try {
            const findByIdEnrollmentUseCase = tsyringe_1.container.resolve(FindByIdEnrollmentUseCase_1.FindByIdEnrollmentUseCase);
            const enrollment = await findByIdEnrollmentUseCase.execute(id);
            return response.status(200).json(enrollment);
        }
        catch (error) {
            console.error(error);
            return response.status(500).json({ message: "Erro ao buscar matrícula" });
        }
    }
}
exports.FindByIdEnrollmentController = FindByIdEnrollmentController;
