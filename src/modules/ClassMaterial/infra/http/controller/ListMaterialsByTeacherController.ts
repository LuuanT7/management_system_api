import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListMaterialsByTeacherUseCase } from "../../../UseCases/ListMaterialsByTeacherUseCase";

export class ListMaterialsByTeacherController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { teacherId } = req.params;

    const useCase = container.resolve(ListMaterialsByTeacherUseCase);

    const materials = await useCase.execute(teacherId);

    return res.json(materials);
  }
}