import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateClassUseCase } from "../useCases/CreateClassUseCase";

export class ClassController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const createClassUseCase = container.resolve(CreateClassUseCase);
    const newClass = await createClassUseCase.execute({ name, description });
    return response.status(201).json(newClass);
  }
}
