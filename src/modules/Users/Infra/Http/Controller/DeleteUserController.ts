import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteUserUseCase } from "@modules/Users/UseCases/DeleteUserUseCase";

export class DeleteUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const deleteUserUseCase = container.resolve(DeleteUserUseCase);

      const user = await deleteUserUseCase.execute(id);

      return response.status(200).json(user);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ message: "Erro ao deletar usuário" });
    }
  }
}   