import { Request, Response } from 'express';
import { CreateActivityUseCase } from '../../../useCases/CreateActivityUseCase';

export class CreateActivityController {
  constructor(private createActivityUseCase: CreateActivityUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const activity = await this.createActivityUseCase.execute(req.body);
      return res.status(201).json(activity);
    } catch (error: any) {
      return res.status(400).json({ message: error.message || 'Erro na criação da atividade.' });
    }
  }
}
