import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListMaterialsByTeacherUseCase } from "../../../UseCases/ListMaterialsByTeacherUseCase";

export const listMaterialsByTeacherController = async (req: Request, res: Response) => {
  try {
    const { teacherId } = req.params;

    const usecase = container.resolve(ListMaterialsByTeacherUseCase);
    const materials = await usecase.execute(teacherId);

    return res.json(materials);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};
