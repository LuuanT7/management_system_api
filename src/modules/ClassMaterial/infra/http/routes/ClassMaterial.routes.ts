import { Router } from "express";
import { createDidacticMaterialController } from "../controller/CreateDidacticMaterialController";
import { listPublishedMaterialsByClassController } from "../controller/ListPublishedMaterialsByClassController";
import { listMaterialsByTeacherController } from "../controller/ListMaterialsByTeacherController";
import { listPublishedMaterialsForStudentsController } from "../controller/ListPublishedMaterialsForStudentsController";



const ClassMaterialRoutes = Router();
ClassMaterialRoutes.post("/", createDidacticMaterialController);
ClassMaterialRoutes.get("/class/:classId", listPublishedMaterialsByClassController);
ClassMaterialRoutes.get("/teacher/:teacherId", listMaterialsByTeacherController);
ClassMaterialRoutes.get("/student/class/:classId", listPublishedMaterialsForStudentsController);

export { ClassMaterialRoutes };
