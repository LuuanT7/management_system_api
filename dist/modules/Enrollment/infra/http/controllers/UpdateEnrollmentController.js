"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEnrollmentController = void 0;
const tsyringe_1 = require("tsyringe");
const UpdateEnrollmentUseCase_1 = require("@modules/Enrollment/useCases/UpdateEnrollmentUseCase");
class UpdateEnrollmentController {
    async handle(request, response) {
        const { id } = request.params;
        const { paymentStatus, paymentId, active } = request.body;
        try {
            const updateEnrollmentUseCase = tsyringe_1.container.resolve(UpdateEnrollmentUseCase_1.UpdateEnrollmentUseCase);
            const enrollment = await updateEnrollmentUseCase.execute({
                id,
                paymentStatus,
                paymentId,
                active
            });
            return response.status(200).json(enrollment);
        }
        catch (error) {
            console.error(error);
            return response.status(500).json({ message: "Erro ao atualizar matrícula" });
        }
    }
}
exports.UpdateEnrollmentController = UpdateEnrollmentController;
