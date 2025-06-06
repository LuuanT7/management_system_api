import { Router } from 'express';
import { CreateClassController } from '../../modules/class/controllers/CreateClassController';
const classRoutes = Router();

const createClassController = new CreateClassController();

classRoutes.post('/', (req, res) => createClassController.handle(req, res));

export { classRoutes };
