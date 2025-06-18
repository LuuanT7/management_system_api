import { Router } from "express";
import { createAttendanceController } from "../controllers/CreateAttendaceController";
import { deleteAttendanceController } from "../controllers/DeleteAttendanceController";
import { findAllAttendanceController } from "../controllers/FindAllAttendanceController";
import { findAttendanceByIdController } from "../controllers/FindAttendanceByIdController";
import { updateAttendanceController } from "../controllers/UpdateAttendanceController";
import { findAttendanceByStudentAndClassController } from "../controllers/FindAttendanceByStudentAndClassController";
import { findAttendanceByClassController } from "../controllers/FindAttendanceByClassController";

const attendanceRoutes = Router();

attendanceRoutes.post("/", createAttendanceController);
attendanceRoutes.get("/", findAllAttendanceController);
attendanceRoutes.get("/:id", findAttendanceByIdController);
attendanceRoutes.put("/:id", updateAttendanceController);
attendanceRoutes.delete("/:id", deleteAttendanceController);
attendanceRoutes.get("/student/:studentId/class/:classId", findAttendanceByStudentAndClassController);
attendanceRoutes.get("/class/:classId", findAttendanceByClassController);

export { attendanceRoutes };

