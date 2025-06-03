import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "@modules/Users/UseCases/CreateUserUseCase";
import { hash } from "bcryptjs";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password, role } = request.body;


    try {

      const createUserUseCase = container.resolve(CreateUserUseCase);

      const hashPassword = await hash(password, 8); // 8 é o número de rounds de hash

      const user = await createUserUseCase.execute({ name, email, password: hashPassword, role });

      return response.status(201).json(user);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ message: "Erro ao criar usuário" });
    }


  }
}