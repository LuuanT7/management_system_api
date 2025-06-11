import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "@modules/Users/UseCases/CreateUserUseCase";
import { hash } from "bcryptjs";
import { CreateStudentUseCase } from "@modules/Users/Student/useCases/CreateStudentUseCase";
import { CreateGuardianUseCase } from "@modules/Users/Guardian/useCases/CreateGuardianUseCase";
import { CreateTeacherUseCase } from "@modules/Users/Teacher/useCases/CreateTeacherUseCase";
import { SendWelcomeEmailUseCase } from "@modules/Mail/UseCases/SendWelcomeEmailUseCase";

export class CreateUserController {
  async handle(request: Request, response: Response) {
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

      const createUserUseCase = container.resolve(CreateUserUseCase);

      const hashPassword = await hash(password, 8); // 8 é o número de rounds de hash

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
        const createStudentUseCase = container.resolve(CreateStudentUseCase);
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
        const createGuardianUseCase = container.resolve(CreateGuardianUseCase);
        const guardian = await createGuardianUseCase.execute({ userId: user.id });
        return response.status(201).json({
          user,
          guardian
        });
      }

      if (role === "TEACHER") {
        const createTeacherUseCase = container.resolve(CreateTeacherUseCase);
        const teacher = await createTeacherUseCase.execute({ userId: user.id });
        return response.status(201).json({
          user,
          teacher
        });
      }

      if (user) {
        const sendWelcomeEmailUseCase = container.resolve(SendWelcomeEmailUseCase);
        await sendWelcomeEmailUseCase.execute({ email, name, password: hashPassword });
      }


      return response.status(201).json(user);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ message: "Erro ao criar usuário" });
    }



  }
}