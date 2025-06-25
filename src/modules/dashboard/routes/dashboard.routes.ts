import { Router, RequestHandler } from 'express';

export class AdminDashboardController {
  getEnrollmentSummary: RequestHandler = async (req, res) => {
    try {
      // ... lógica aqui (ex: consultar banco, calcular resumos, etc.)
      res.status(200).json({ message: 'Resumo de matrículas gerado com sucesso' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  };
}

const dashboardRoutes = Router();
const adminDashboardController = new AdminDashboardController();

dashboardRoutes.get(
  '/enrollments-summary',
  adminDashboardController.getEnrollmentSummary
);

export { dashboardRoutes };
