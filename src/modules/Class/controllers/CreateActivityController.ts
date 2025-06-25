import { Request, Response } from 'express';
import { CreateActivityUseCase } from '../useCases/createActivity/CreateActivityUseCase';

export class CreateActivityController {
  async handle(req: Request, res: Response) {
    const {
      title,
      description,
      dueDate,
      maxScore,
      type,
      weight,
      teacherId,
      classId,
    } = req.body;

    const useCase = new CreateActivityUseCase();
    const activity = await useCase.execute({
      title,
      description,
      dueDate,
      maxScore,
      type,
      weight,
      teacherId,
      classId,
    });

    return res.status(201).json(activity);
  }
}
