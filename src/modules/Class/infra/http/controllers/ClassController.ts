import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListClassesUseCase } from '@modules/Class/useCases/ListClassesUseCase';

export class ClassController {
  async index(req: Request, res: Response): Promise<Response> {
    const { teacherId, subject, shift } = req.query;

    const listClassesUseCase = container.resolve(ListClassesUseCase);

    const classes = await listClassesUseCase.execute({
      teacherId: teacherId as string,
      subject: subject as string,
      shift: shift as 'MORNING' | 'AFTERNOON',
    });

    return res.json(classes);
  }
}
