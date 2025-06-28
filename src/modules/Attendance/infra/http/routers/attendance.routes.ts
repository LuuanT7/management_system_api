import { Router } from "express";
import { CreateAttendanceController } from "../controllers/CreateAttendaceController";

const attendanceRoutes = Router();
const createAttendanceController = new CreateAttendanceController();

attendanceRoutes.post("/", (req, res) => createAttendanceController.handle(req, res));
/*attendanceRoutes.get("/", findAllAttendanceController);
attendanceRoutes.get("/:id", findAttendanceByIdController);
attendanceRoutes.put("/:id", updateAttendanceController);
attendanceRoutes.delete("/:id", deleteAttendanceController);
attendanceRoutes.get("/student/:studentId/class/:classId", findAttendanceByStudentAndClassController);
attendanceRoutes.get("/class/:classId", findAttendanceByClassController);
attendanceRoutes.get("/class/:classId", findClassesByTeacherController);
attendanceRoutes.get("/guardian/:guardianId", findAttendancesByGuardianController);
attendanceRoutes.get("/period", findAttendancesByPeriodController);*/
export { attendanceRoutes };

