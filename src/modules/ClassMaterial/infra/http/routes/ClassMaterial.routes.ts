import { Router } from "express";
import { CreateDidacticMaterialController } from "../controller/CreateDidacticMaterialController";
import { ListPublishedMaterialsByClassController } from "../controller/ListPublishedMaterialsByClassController";
import { ListPublishedMaterialsForStudentsController } from "../controller/ListPublishedMaterialsForStudentsController";
import { ListMaterialsByTeacherController } from "../controller/ListMaterialsByTeacherController";
import { authenticate } from "@shared/infra/http/middleware/authenticate";

const classMaterialRoutes = Router();

const createDidacticMaterialController = new CreateDidacticMaterialController();
const listPublishedMaterialsByClassController = new ListPublishedMaterialsByClassController();
const listPublishedMaterialsForStudentsController = new ListPublishedMaterialsForStudentsController();
const listMaterialsByTeacherController = new ListMaterialsByTeacherController();

classMaterialRoutes.post("/", authenticate, createDidacticMaterialController.handle);
classMaterialRoutes.get("/published/:classId", authenticate, listPublishedMaterialsByClassController.handle);
classMaterialRoutes.get("/published/student/:classId", authenticate, listPublishedMaterialsForStudentsController.handle);
classMaterialRoutes.get("/teacher/:teacherId", authenticate, listMaterialsByTeacherController.handle);

export { classMaterialRoutes };

