import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateClassMaterialUseCase } from "../../../UseCases/CreateClassMaterialUseCase";

export class CreateDidacticMaterialController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { classId, title, description, fileUrl, isPublished } = req.body;

    const useCase = container.resolve(CreateClassMaterialUseCase);

    const material = await useCase.execute({
      classId,
      title,
      description,
      fileUrl,
      isPublished,
    });

    return res.status(201).json(material);
  }
}

