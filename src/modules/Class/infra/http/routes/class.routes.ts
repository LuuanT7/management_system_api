import { Router } from 'express';
import { ClassController } from '../controllers/ClassController';

const classRoutes = Router();
const classController = new ClassController();

classRoutes.get('/', classController.index);

export { classRoutes };
