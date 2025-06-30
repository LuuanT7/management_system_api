import { Router } from "express";
import { CreateAttendanceController } from "../controllers/CreateAttendaceController";
import {DeleteAttendanceController} from "../controllers/DeleteAttendanceController"
import {FindAllAttendanceController} from "../controllers/FindAllAttendanceController"
import {FindAttendanceByClassController} from "../controllers/FindAttendanceByClassController"
import {FindAttendanceByIdController} from "../controllers/FindAttendanceByIdController"
import {FindAttendanceByStudentAndClassController} from "../controllers/FindAttendanceByStudentAndClassController"
import {FindAttendancesByGuardianController} from "../controllers/FindAttendancesByGuardianController"
import {FindAttendancesByPeriodController} from "../controllers/FindAttendancesByPeriodController"
import {FindClassesByTeacherController} from "../controllers/FindClassesByTeacherController"
import {UpdateAttendanceController} from "../controllers/UpdateAttendanceController"
import { authenticate } from "@shared/infra/http/middleware/authenticate";


const attendanceRoutes = Router();
const createAttendanceController = new CreateAttendanceController();
const deleteAttendanceController = new DeleteAttendanceController();
const findAllAttendanceController = new FindAllAttendanceController();
const findAttendanceByClassController = new FindAttendanceByClassController();
const findAttendanceByIdController = new FindAttendanceByIdController();
const findAttendanceByStudentAndClassController = new FindAttendanceByStudentAndClassController();
const findAttendancesByGuardianController = new FindAttendancesByGuardianController();
const findAttendancesByPeriodController = new FindAttendancesByPeriodController();
const findClassesByTeacherController = new FindClassesByTeacherController();
const updateAttendanceController = new UpdateAttendanceController();

attendanceRoutes.post("/", authenticate, createAttendanceController.handle); // Criar presença
attendanceRoutes.get("/", authenticate, findAllAttendanceController.handle); // Listar todas
attendanceRoutes.get("/:id", authenticate, findAttendanceByIdController.handle); // Buscar por ID
attendanceRoutes.put("/:id", authenticate, updateAttendanceController.handle); // Atualizar presença
attendanceRoutes.delete("/:id", authenticate, deleteAttendanceController.handle); // Deletar presença

attendanceRoutes.get("/student/:studentId/class/:classId", authenticate, findAttendanceByStudentAndClassController.handle); // Buscar presença por aluno e turma
attendanceRoutes.get("/class/:classId", authenticate, findAttendanceByClassController.handle); // ✅ Buscar presenças por turma
attendanceRoutes.get("/class/:classId/guardian", authenticate, findAttendancesByGuardianController.handle); // Buscar presenças da turma para responsáveis
attendanceRoutes.get("/class/:classId/period", authenticate, findAttendancesByPeriodController.handle); // Buscar presenças por turma e período
attendanceRoutes.get("/guardian/:guardianId/classes", authenticate, findClassesByTeacherController.handle); // Buscar turmas do responsável
export { attendanceRoutes };

