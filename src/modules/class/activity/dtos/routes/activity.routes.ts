import { Router } from "express";
import { CreateActivityUseCase } from "../useCases/createActivity/CreateActivityUseCase";
import { CreateActivityController } from "../controllers/CreateActivityController";
import { ListActivitiesUseCase } from "../useCases/createActivity/listActivity/ListActivitiesUseCase";
import { ListActivitiesController } from "../controllers/ListActivitiesController";

const activityRoutes = Router();

// Instanciar UseCases
const createActivityUseCase = new CreateActivityUseCase();
const listActivitiesUseCase = new ListActivitiesUseCase();

// Instanciar Controllers com os UseCases
const createActivityController = new CreateActivityController(createActivityUseCase);
const listActivitiesController = new ListActivitiesController(listActivitiesUseCase);

// Definir rotas, usando bind para manter o contexto do this
activityRoutes.post("/", createActivityController.handle.bind(createActivityController));
activityRoutes.get("/", listActivitiesController.handle.bind(listActivitiesController));

export { activityRoutes };
