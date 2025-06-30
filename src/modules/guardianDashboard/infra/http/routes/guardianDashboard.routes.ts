import { Router } from 'express';
import { GuardianDashboardController } from '../controllers/GuardianDashboardController';
import { GuardianDashboardRepository } from '../../../repositories/GuardianDashboardRepository';
import { GetAttendanceHistoryUseCase } from '../../../useCases/GetAttendanceHistoryUseCase';

const guardianDashboardRoutes = Router();

const repository = new GuardianDashboardRepository();
const useCase = new GetAttendanceHistoryUseCase(repository);
const controller = new GuardianDashboardController(useCase);

guardianDashboardRoutes.get('/attendance-history/:guardianId', (req, res) => controller.handle(req, res));

export { guardianDashboardRoutes };