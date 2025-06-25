import { Router, Request, Response } from "express";
import { CreateActivityController } from "@modules/activities/controllers/CreateActivityController";
import { ListActivitiesController } from "@modules/activities/controllers/ListActivitiesController";

const activityRoutes = Router();

// Crie uma função wrapper para garantir a tipagem correta
const routeHandler = (controller: { handle: (req: Request, res: Response) => Promise<Response> }) => {
  return async (req: Request, res: Response) => {
    try {
      await controller.handle(req, res);
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  };
};

// Use a instância do controller diretamente
const createActivityController = new CreateActivityController();
const listActivitiesController = new ListActivitiesController();

// Configure as rotas
activityRoutes.post("/", routeHandler(createActivityController));
activityRoutes.get("/", routeHandler(listActivitiesController));

export { activityRoutes };