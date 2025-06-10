import { Router } from "express";
import { CreateAttendanceUsecase } from "../../../userCases/CreateAttendanceUsecases";
import { FindAllAttendanceUsecase } from "../../../userCases/FindAllAttendanceUsecase";
import { FindAttendanceByIdUsecase } from "../../../userCases/FindAttendanceByIdUsecase";
import { UpdateAttendanceUsecase } from "../../../userCases/UpdateAttendanceUsecase";
import { DeleteAttendanceUsecase } from "../../../userCases/DeleteAttendanceUsecase";
import { createAttendanceController, deleteAttendanceController, findAttendanceByIdController, updateAttendanceController } from "../controllers/AttendaceController";
import { findByStudentAndClassController } from "../controllers/FindByStudentAndClassController";

const attendanceRoutes = Router();

attendanceRoutes.post("/", createAttendanceController);
attendanceRoutes.get("/", findAttendanceByIdController);
attendanceRoutes.get("/:id", findAttendanceByIdController);
attendanceRoutes.put("/:id", updateAttendanceController);
attendanceRoutes.delete("/:id", deleteAttendanceController);
attendanceRoutes.get("/student/:studentId/class/:classId", findByStudentAndClassController);

export { attendanceRoutes };
