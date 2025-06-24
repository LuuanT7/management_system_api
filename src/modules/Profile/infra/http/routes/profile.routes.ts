import { Router } from 'express';
import { ProfileStudentController } from '../controllers/ProfileStudentController';
import { authenticate } from '@shared/infra/http/middleware/authenticate';
import permission from '@shared/infra/http/middleware/permissions';

const profileStudentController = new ProfileStudentController();

const profileRoutes = Router();

profileRoutes.get(
  '/student/:id',
  authenticate,
  permission(['STUDENT', 'GUARDIAN', 'TEACHER', 'ADMIN']),
  profileStudentController.handle,
);

export { profileRoutes };
