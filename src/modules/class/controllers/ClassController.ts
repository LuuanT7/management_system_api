import { Request, Response } from 'express';
import { ListClassesUseCase } from '../useCases/services/ListClassesUseCase';
import { instanceToPlain } from 'class-transformer';
import { container } from 'tsyringe';

class ClassController {
  async list(request: Request, response: Response): Promise<Response> {
    const { teacherId, shift, subject } = request.query;

    const listClassesUseCase = container.resolve(ListClassesUseCase); // Instância resolvida

    const classes = await listClassesUseCase.execute({ // Chamada no método da instância
      teacherId: teacherId as string,
      shift: shift as 'MORNING' | 'AFTERNOON' | undefined,
      subject: subject as string,
    });

    return response.json(instanceToPlain(classes));
  }
}

export { ClassController };