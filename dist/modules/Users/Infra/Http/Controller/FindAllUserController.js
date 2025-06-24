"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllUserController = void 0;
const tsyringe_1 = require("tsyringe");
const FindAllUserUseCase_1 = require("@modules/Users/UseCases/FindAllUserUseCase");
class FindAllUserController {
    async handle(request, response) {
        try {
            const findAllUserUseCase = tsyringe_1.container.resolve(FindAllUserUseCase_1.FindAllUserUseCase);
            const users = await findAllUserUseCase.execute();
            return response.status(200).json(users);
        }
        catch (error) {
            console.error(error);
            return response.status(500).json({ message: "Erro ao buscar todos os usuários" });
        }
    }
}
exports.FindAllUserController = FindAllUserController;
