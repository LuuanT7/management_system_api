"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserController = void 0;
const tsyringe_1 = require("tsyringe");
const DeleteUserUseCase_1 = require("@modules/Users/UseCases/DeleteUserUseCase");
class DeleteUserController {
    async handle(request, response) {
        const { id } = request.params;
        try {
            const deleteUserUseCase = tsyringe_1.container.resolve(DeleteUserUseCase_1.DeleteUserUseCase);
            const user = await deleteUserUseCase.execute(id);
            return response.status(200).json(user);
        }
        catch (error) {
            console.error(error);
            return response.status(500).json({ message: "Erro ao deletar usuário" });
        }
    }
}
exports.DeleteUserController = DeleteUserController;
