import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListPublishedMaterialsByClassUseCase } from "../../../UseCases/ListPublishedMaterialsByClassUseCase";

export class ListPublishedMaterialsByClassController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { classId } = req.params;

    const useCase = container.resolve(ListPublishedMaterialsByClassUseCase);

    const materials = await useCase.execute(classId);

    return res.json(materials);
  }
}
