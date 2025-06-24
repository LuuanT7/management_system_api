"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserController = void 0;
const tsyringe_1 = require("tsyringe");
const UpdateUserUseCase_1 = require("@modules/Users/UseCases/UpdateUserUseCase");
class UpdateUserController {
    async handle(request, response) {
        const { id } = request.params;
        const { name, email, password, role, cpf, rg, gender, phone, birthDate } = request.body;
        try {
            const updateUserUseCase = tsyringe_1.container.resolve(UpdateUserUseCase_1.UpdateUserUseCase);
            const user = await updateUserUseCase.execute({ id, name, email, password, role, cpf, rg, gender, phone, birthDate });
            return response.status(200).json(user);
        }
        catch (error) {
            console.error(error);
            return response.status(500).json({ message: "Erro ao atualizar usuário" });
        }
    }
}
exports.UpdateUserController = UpdateUserController;
