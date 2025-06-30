import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllGradesUseCase } from "../../../useCases/FindAllGradesUseCase";

export class FindAllGradesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(FindAllGradesUseCase);
    const result = await useCase.execute();
    return res.json(result);
  }
}