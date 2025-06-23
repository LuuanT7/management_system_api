import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateClassMaterialUseCase } from "../../../UseCases/CreateClassMaterialUseCase";

export const createDidacticMaterialController = async (req: Request, res: Response) => {
  try {
    const { title, description, fileUrl, classId, isPublished } = req.body;

    const usecase = container.resolve(CreateClassMaterialUseCase);

    const material = await usecase.execute({
      title,
      description,
      fileUrl,
      classId,
      isPublished
    });

    return res.status(201).json(material);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};
