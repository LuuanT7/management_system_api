// modules/activity/useCases/list/index.ts
import { ListActivitiesUseCase } from './listActivity/ListActivitiesUseCase';
import { ListActivitiesController } from '../../controllers/ListActivitiesController';

const listActivitiesUseCase = new ListActivitiesUseCase();
const listActivitiesController = new ListActivitiesController(
  listActivitiesUseCase,
);

export { listActivitiesController };
