import { Router } from "express";
import { CreateGradeController } from "../controllers/CreateGradeController";
import { UpdateGradeController } from "../controllers/UpdateGradeController";
import { FindAllGradesController } from "../controllers/FindAllGradesController";
import { FindGradeByIdController } from "../controllers/FindGradeByIdController";
import { DeleteGradeController } from "../controllers/DeleteGradeController";

const gradeRoutes = Router();

const createGradeController = new CreateGradeController();
const updateGradeController = new UpdateGradeController();
const findAllGradesController = new FindAllGradesController();
const findGradeByIdController = new FindGradeByIdController();
const deleteGradeController = new DeleteGradeController();

gradeRoutes.post("/", createGradeController.handle);
gradeRoutes.put("/:id", updateGradeController.handle);
gradeRoutes.get("/", findAllGradesController.handle);
gradeRoutes.get("/:id", findGradeByIdController.handle);
gradeRoutes.delete("/:id", deleteGradeController.handle);

export { gradeRoutes };
