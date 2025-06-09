import { Router } from "express";
import { CreateEnrollmentController } from "../controllers/CreateEnrollmentController";
import { FindAllEnrollmentController } from "../controllers/FindAllEnrollmentController";
import { FindByIdEnrollmentController } from "../controllers/FindByIdEnrollmentController";
import { UpdateEnrollmentController } from "../controllers/UpdateEnrollmentController";
import { DeleteEnrollmentController } from "../controllers/DeleteEnrollmentController";
import { authenticate } from "@shared/infra/http/middleware/authenticate";

const createEnrollmentController = new CreateEnrollmentController();
const findAllEnrollmentController = new FindAllEnrollmentController();
const findByIdEnrollmentController = new FindByIdEnrollmentController();
const updateEnrollmentController = new UpdateEnrollmentController();
const deleteEnrollmentController = new DeleteEnrollmentController();

const enrollmentRoutes = Router();

enrollmentRoutes.get("/", authenticate, findAllEnrollmentController.handle);
enrollmentRoutes.get("/:id", authenticate, findByIdEnrollmentController.handle);
enrollmentRoutes.post("/", authenticate, createEnrollmentController.handle);
enrollmentRoutes.put("/:id", authenticate, updateEnrollmentController.handle);
enrollmentRoutes.delete("/:id", authenticate, deleteEnrollmentController.handle);

export { enrollmentRoutes }; 