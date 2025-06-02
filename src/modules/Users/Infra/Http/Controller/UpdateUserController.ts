import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserUseCase } from "@modules/Users/UseCases/UpdateUserUseCase";

export class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, email, password, role } = request.body;

    try {
      const updateUserUseCase = container.resolve(UpdateUserUseCase);

      const user = await updateUserUseCase.execute({ id, name, email, password, role });

      return response.status(200).json(user);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ message: "Erro ao atualizar usuário" });
    }
  }
}