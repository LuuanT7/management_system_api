import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListPublishedMaterialsForStudentsUseCase } from "../../../UseCases/ListPublishedMaterialsForStudentsUseCase";

export const listPublishedMaterialsForStudentsController = async (req: Request, res: Response) => {
  try {
    const { classId } = req.params;

    const usecase = container.resolve(ListPublishedMaterialsForStudentsUseCase);
    const materials = await usecase.execute(classId);

    return res.json(materials);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};
