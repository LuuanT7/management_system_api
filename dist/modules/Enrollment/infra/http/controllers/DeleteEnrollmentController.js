"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEnrollmentController = void 0;
const tsyringe_1 = require("tsyringe");
const DeleteEnrollmentUseCase_1 = require("@modules/Enrollment/useCases/DeleteEnrollmentUseCase");
class DeleteEnrollmentController {
    async handle(request, response) {
        const { id } = request.params;
        try {
            const deleteEnrollmentUseCase = tsyringe_1.container.resolve(DeleteEnrollmentUseCase_1.DeleteEnrollmentUseCase);
            const result = await deleteEnrollmentUseCase.execute(id);
            return response.status(200).json({ message: result });
        }
        catch (error) {
            console.error(error);
            return response.status(500).json({ message: "Erro ao deletar matrícula" });
        }
    }
}
exports.DeleteEnrollmentController = DeleteEnrollmentController;
