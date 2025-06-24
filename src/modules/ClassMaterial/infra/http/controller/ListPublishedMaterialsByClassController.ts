import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListPublishedMaterialsByClassUseCase } from "../../../UseCases/ListPublishedMaterialsByClassUseCase";

export const listPublishedMaterialsByClassController = async (req: Request, res: Response) => {
  try {
    const { classId } = req.params;

    const usecase = container.resolve(ListPublishedMaterialsByClassUseCase);
    const materials = await usecase.execute(classId);

    return res.json(materials);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};
