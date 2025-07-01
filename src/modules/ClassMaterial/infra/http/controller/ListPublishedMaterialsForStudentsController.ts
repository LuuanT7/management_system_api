import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListPublishedMaterialsForStudentsUseCase } from "../../../UseCases/ListPublishedMaterialsForStudentsUseCase";

export class ListPublishedMaterialsForStudentsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { classId } = req.params;

    const useCase = container.resolve(ListPublishedMaterialsForStudentsUseCase);

    const materials = await useCase.execute(classId);

    return res.json(materials);
  }
}