import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteGradeUseCase } from "../../../useCases/DeleteGradeUseCase";

export class DeleteGradeController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const useCase = container.resolve(DeleteGradeUseCase);
    await useCase.execute(id);
    return res.status(204).send();
  }
}