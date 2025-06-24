"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const tsyringe_1 = require("tsyringe");
const CreateUserUseCase_1 = require("@modules/Users/UseCases/CreateUserUseCase");
const bcryptjs_1 = require("bcryptjs");
const CreateStudentUseCase_1 = require("@modules/Users/Student/useCases/CreateStudentUseCase");
const CreateGuardianUseCase_1 = require("@modules/Users/Guardian/useCases/CreateGuardianUseCase");
const CreateTeacherUseCase_1 = require("@modules/Users/Teacher/useCases/CreateTeacherUseCase");
const SendWelcomeEmailUseCase_1 = require("@modules/Mail/UseCases/SendWelcomeEmailUseCase");
class CreateUserController {
    async handle(request, response) {
        /*
             #swagger.tags = ['Users']
             #swagger.summary = 'Create User'
             #swagger.description = 'This route is for create a new user'
             #swagger.requestBody = {
               required: true,
               "content": {
                 "application/json": {
                   schema: {
                     type: "object",
                     properties: {
                       name: {
                           type: "string"
                       },
                       email: {
                           type: "string"
                       },
                       password: {
                           type: "string"
                       },
                       role: {
                           type: "enum",
                           enum: ["ADMIN", "GUARDIAN", "STUDENT", "TEACHER"]
                       },
                       cpf: {
                           type: "string"
                       },
                       rg: {
                           type: "string"
                       },
                       gender: {
                           type: "string"
                       },
                       phone: {
                           type: "string"
                       },
                       birthDate: {
                           type: "string"
                     },
                     required: ["name", "email", "password", "role", "cpf", "rg", "gender", "phone", "birthDate"]
                   }
                 }
               }
             }
             #swagger.security = []
           */
        const { name, email, password, role, guardianId, cpf, rg, gender, phone, birthDate } = request.body;
        try {
            const createUserUseCase = tsyringe_1.container.resolve(CreateUserUseCase_1.CreateUserUseCase);
            const hashPassword = await (0, bcryptjs_1.hash)(password, 8); // 8 é o número de rounds de hash
            const user = await createUserUseCase.execute({
                name,
                email,
                password: hashPassword,
                role,
                cpf,
                rg,
                gender,
                phone,
                birthDate
            });
            if (role === "STUDENT") {
                const createStudentUseCase = tsyringe_1.container.resolve(CreateStudentUseCase_1.CreateStudentUseCase);
                const student = await createStudentUseCase.execute({
                    userId: user.id,
                    guardianId: guardianId,
                });
                return response.status(201).json({
                    user,
                    student
                });
            }
            if (role === "GUARDIAN") {
                const createGuardianUseCase = tsyringe_1.container.resolve(CreateGuardianUseCase_1.CreateGuardianUseCase);
                const guardian = await createGuardianUseCase.execute({ userId: user.id });
                return response.status(201).json({
                    user,
                    guardian
                });
            }
            if (role === "TEACHER") {
                const createTeacherUseCase = tsyringe_1.container.resolve(CreateTeacherUseCase_1.CreateTeacherUseCase);
                const teacher = await createTeacherUseCase.execute({ userId: user.id });
                return response.status(201).json({
                    user,
                    teacher
                });
            }
            if (user) {
                const sendWelcomeEmailUseCase = tsyringe_1.container.resolve(SendWelcomeEmailUseCase_1.SendWelcomeEmailUseCase);
                await sendWelcomeEmailUseCase.execute({ email, name, password: hashPassword });
            }
            return response.status(201).json(user);
        }
        catch (error) {
            console.error(error);
            return response.status(500).json({ message: "Erro ao criar usuário" });
        }
    }
}
exports.CreateUserController = CreateUserController;
