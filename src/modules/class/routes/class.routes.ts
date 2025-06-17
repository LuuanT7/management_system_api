import { Router } from "express";
import { ClassController } from "../controllers/ClassController";

const classRoutes = Router();
const classController = new ClassController();

// Com async/await explícito
classRoutes.get("/", async (req, res, next) => {
  try {
    await classController.list(req, res);
  } catch (error) {
    next(error);
  }
});

export { classRoutes };