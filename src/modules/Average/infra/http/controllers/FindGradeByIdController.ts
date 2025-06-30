import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindGradeByIdUseCase } from "../../../useCases/FindGradeByIdUseCase";

export class FindGradeByIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const useCase = container.resolve(FindGradeByIdUseCase);
    const result = await useCase.execute(id);
    return res.json(result);
  }
}