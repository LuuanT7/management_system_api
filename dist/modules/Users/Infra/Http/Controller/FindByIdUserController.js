"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindByIdUserController = void 0;
const tsyringe_1 = require("tsyringe");
const FindByIdUserUseCase_1 = require("@modules/Users/UseCases/FindByIdUserUseCase");
class FindByIdUserController {
    async handle(request, response) {
        const { id } = request.params;
        try {
            const findByIdUserUseCase = tsyringe_1.container.resolve(FindByIdUserUseCase_1.FindByIdUserUseCase);
            const user = await findByIdUserUseCase.execute(id);
            return response.status(200).json(user);
        }
        catch (error) {
            console.error(error);
            return response.status(500).json({ message: "Erro ao buscar usuário por ID" });
        }
    }
}
exports.FindByIdUserController = FindByIdUserController;
