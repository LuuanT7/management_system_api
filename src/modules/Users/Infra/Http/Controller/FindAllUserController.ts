import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllUserUseCase } from "@modules/Users/UseCases/FindAllUserUseCase";

export class FindAllUserController {
  async handle(request: Request, response: Response) {
    try {
      const findAllUserUseCase = container.resolve(FindAllUserUseCase);
      const { page, limit, search } = request.query;
      const users = await findAllUserUseCase.execute({ page: Number(page), limit: Number(limit), search: search as string });
  
      return response.status(200).json(users);
      
    }
    catch (error) {
      console.error(error);
      return response.status(500).json({ message: "Erro ao buscar todos os usuários" });
    }
  } 
} 