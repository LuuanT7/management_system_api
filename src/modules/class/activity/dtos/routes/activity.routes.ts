import { Router } from "express";

// Controllers
import { CreateActivityController } from "../controllers/CreateActivityController";
import { ListActivitiesController } from "../controllers/ListActivitiesController";

// UseCases
import { CreateActivityUseCase } from "../../../useCases/createActivity/CreateActivityUseCase";
import { ListActivitiesUseCase } from "../../../useCases/createActivity/listActivity/ListActivitiesUseCase";

const activityRoutes = Router();

const createActivityUseCase = new CreateActivityUseCase();
const listActivitiesUseCase = new ListActivitiesUseCase();

const createActivityController = new CreateActivityController(createActivityUseCase);
const listActivitiesController = new ListActivitiesController(listActivitiesUseCase);

activityRoutes.post("/", createActivityController.handle);
activityRoutes.get("/", listActivitiesController.handle);


export { activityRoutes };
