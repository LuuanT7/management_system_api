import { Router } from "express";
import { AttendanceController } from "../controllers/AttendaceController";
import { CreateAttendanceUseCase } from "../../../userCases/CreateAttendanceUsecases";
import { PrismaAttendanceRepository } from "../../../repositories/ORM/PrismaAttendanceRepository";

const attendanceRoutes = Router();

const repository = new PrismaAttendanceRepository();
const useCase = new CreateAttendanceUseCase(repository);
const controller = new AttendanceController(useCase);

attendanceRoutes.post("/attendance", (req, res) => controller.handle(req, res));

export { attendanceRoutes };