import { Router } from 'express';
import { StudentProfileController } from '../controllers/StudentProfileController';
import { authenticate } from '@shared/infra/http/middleware/authenticate';
import permission from '@shared/infra/http/middleware/permissions';
import { TeacherProfileController } from '../controllers/TeacherProfileController';
import { GuardianProfileController } from '../controllers/GuardianProfileController';

const studentProfileController = new StudentProfileController();
const teacherProfileController = new TeacherProfileController();
const guardianProfileController = new GuardianProfileController();

const profileRoutes = Router();

profileRoutes.get(
  '/student/:userId',
  authenticate,
  permission(['STUDENT', 'GUARDIAN', 'TEACHER', 'ADMIN']),
  studentProfileController.handle,
);

profileRoutes.get(
  '/teacher/:id',
  authenticate,
  permission(['TEACHER', 'ADMIN']),
  teacherProfileController.handle,
);
profileRoutes.get(
  '/guardian/:id',
  authenticate,
  permission(['GUARDIAN', 'ADMIN']),
  guardianProfileController.handle,
);

export { profileRoutes };
