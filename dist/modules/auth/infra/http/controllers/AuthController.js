"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const tsyringe_1 = require("tsyringe");
const AuthenticateUserUseCase_1 = require("../../../useCases/AuthenticateUserUseCase");
class AuthController {
    async authenticate(request, response) {
        const { email, password } = request.body;
        /*
             #swagger.tags = ['Auth']
             #swagger.summary = 'User Auth'
             #swagger.description = 'This route is for user autentication'
             #swagger.requestBody = {
               required: true,
               "content": {
                 "application/json": {
                   schema: {
                     type: "object",
                     properties: {
                       email: {
                           type: "string"
                       },
                       password: {
                           type: "string"
                       },
                     },
                     required: ["email", "password"]
                   }
                 }
               }
             }
             #swagger.security = []
           */
        try {
            const authenticateUser = tsyringe_1.container.resolve(AuthenticateUserUseCase_1.AuthenticateUserUseCase);
            const { user, token, refreshToken } = await authenticateUser.execute({
                email,
                password,
            });
            return response.json({ user, token, refreshToken });
        }
        catch (error) {
            console.error(error);
            return response.status(500).json({ message: 'Internal server error' });
        }
    }
}
exports.AuthController = AuthController;
