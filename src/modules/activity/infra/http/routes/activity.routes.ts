import { Router } from 'express';
import { CreateActivityController } from '../../http/controllers/CreateActivityController';
import { ListActivitiesController } from '../../http/controllers/ListActivitiesController';
import { CreateActivityUseCase } from '../../../useCases/CreateActivityUseCase';
import { ListActivitiesUseCase } from '../../../useCases/ListActivitiesUseCase';
import { PrismaActivityRepository } from '../../../repositories/orm/PrismaActivityRepository';

const activityRoutes = Router();

// Repositório compartilhado
const activityRepository = new PrismaActivityRepository();

// Instâncias dos use cases com injeção de dependência
const createActivityUseCase = new CreateActivityUseCase();
const listActivitiesUseCase = new ListActivitiesUseCase(activityRepository);

// Instâncias dos controllers
const createActivityController = new CreateActivityController(createActivityUseCase);
const listActivitiesController = new ListActivitiesController(listActivitiesUseCase);

// Rotas
activityRoutes.post('/', createActivityController.handle.bind(createActivityController));
activityRoutes.get('/', listActivitiesController.handle.bind(listActivitiesController));

export { activityRoutes };