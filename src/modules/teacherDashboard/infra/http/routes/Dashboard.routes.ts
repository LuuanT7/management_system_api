import { Router } from 'express';
import { DashboardController } from '../controllers/DashboardController';
import { DashboardRepository } from '../../../repositories/DashboardRepository';
import { GetClassPerformanceUseCase } from '../../../useCases/GetClassPerformanceUseCase';
import { GetAverageAttendanceUseCase } from '../../../useCases/GetAverageAttendanceUseCase';

const dashboardRoutes = Router();

const repository = new DashboardRepository();
const getClassPerformanceUseCase = new GetClassPerformanceUseCase(repository);
const getAverageAttendanceUseCase = new GetAverageAttendanceUseCase(repository);

const controller = new DashboardController(getClassPerformanceUseCase, getAverageAttendanceUseCase);

dashboardRoutes.get('/performance/:teacherId', (req, res) => controller.performance(req, res));
dashboardRoutes.get('/attendance/:teacherId', (req, res) => controller.attendance(req, res));

export { dashboardRoutes };
