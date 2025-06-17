import { Router } from "express";

import { createAttendanceController } from "../controllers/AttendaceCont";
import { findAttendanceByIdController } from "../controllers/AttendanceController";
import { updateAttendanceController } from "../controllers/AttendanceController";
import { deleteAttendanceController } from "../controllers/AttendanceController";
import { findByStudentAndClassController } from "../controllers/FindByStudentAndClassController";

const attendanceRoutes = Router();

attendanceRoutes.post("/", createAttendanceController);
attendanceRoutes.get("/", findAttendanceByIdController); // Aqui talvez seja para listar todos, revise depois.
attendanceRoutes.get("/:id", findAttendanceByIdController);
attendanceRoutes.put("/:id", updateAttendanceController);
attendanceRoutes.delete("/:id", deleteAttendanceController);
attendanceRoutes.get("/student/:studentId/class/:classId", findByStudentAndClassController);

export { attendanceRoutes };
