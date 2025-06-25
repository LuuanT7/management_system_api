import { Router } from 'express';
import { CreateActivityController } from '../../../controllers/CreateActivityController';
import { ListActivitiesController } from '../../../controllers/ListActivitiesController';
import { CreateActivityUseCase } from '../../../useCases/createActivity/CreateActivityUseCase';
import { ListActivitiesUseCase } from '../../../useCases/createActivity/listActivity/ListActivitiesUseCase';

const activityRoutes = Router();

const createActivityController = new CreateActivityController();
const listActivitiesController = new ListActivitiesController();

activityRoutes.post(
  '/',
  createActivityController.handle.bind(createActivityController),
);
activityRoutes.get(
  '/',
  listActivitiesController.handle.bind(listActivitiesController),
);

export { activityRoutes };
