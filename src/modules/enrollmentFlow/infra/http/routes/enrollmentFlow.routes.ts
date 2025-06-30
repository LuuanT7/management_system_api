import { Router } from 'express';
import { EnrollmentFlowController } from '../controllers/EnrollmentFlowController';
import { CreateEnrollmentUseCase } from '../../../useCases/CreateFullEnrollmentUseCase';
import { ListEnrollmentsByStudentUseCase } from '../../../useCases/ListEnrollmentsByStudentUseCase';
import { ListEnrollmentsByClassUseCase } from '../../../useCases/ListEnrollmentsByClassUseCase';
import { ListEnrollmentsByPaymentStatusUseCase } from '../../../useCases/ListEnrollmentsByPaymentStatusUseCase';
import { EnrollmentFlowRepository } from '../../../repositories/EnrollmentFlowRepository';

const enrollmentRoutes = Router();

const repository = new EnrollmentFlowRepository();
const controller = new EnrollmentFlowController(
  new CreateEnrollmentUseCase(repository),
  new ListEnrollmentsByStudentUseCase(repository),
  new ListEnrollmentsByClassUseCase(repository),
  new ListEnrollmentsByPaymentStatusUseCase(repository)
);

enrollmentRoutes.post('/', (req, res) => controller.create(req, res));
enrollmentRoutes.get('/student/:studentId', (req, res) => controller.listByStudent(req, res));
enrollmentRoutes.get('/class/:classId', (req, res) => controller.listByClass(req, res));
enrollmentRoutes.get('/status/:status', (req, res) => controller.listByPaymentStatus(req, res));

export { enrollmentRoutes };
