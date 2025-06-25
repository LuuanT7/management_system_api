import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListEnrollmentSummaryUseCase } from '../useCases/ListEnrollmentSummaryUseCase';

export class AdminDashboardController {
  async getEnrollmentSummary(request: Request, response: Response): Promise<Response> {
    console.log('Recebida requisição GET /dashboard/enrollments-summary');

    try {
      const useCase = container.resolve(ListEnrollmentSummaryUseCase);
      const summary = await useCase.execute();

      console.log('Dados retornados:', summary);

      return response.json(summary);
    } catch (error) {
      console.error('Erro ao executar getEnrollmentSummary:', error);
      return response.status(500).json({ message: 'Erro interno no servidor' });
    }
  }
}
