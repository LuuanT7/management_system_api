import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByIdUserUseCase } from "@modules/Users/UseCases/FindByIdUserUseCase";

export class FindByIdUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;  

    try {
      const findByIdUserUseCase = container.resolve(FindByIdUserUseCase);

      const user = await findByIdUserUseCase.execute(id);

      return response.status(200).json(user);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ message: "Erro ao buscar usuário por ID" });
    }
  }
}