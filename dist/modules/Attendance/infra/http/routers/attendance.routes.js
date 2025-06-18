"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attendanceRoutes = void 0;
const express_1 = require("express");
const CreateAttendaceController_1 = require("../controllers/CreateAttendaceController");
const FindAllAttendanceController_1 = require("../controllers/FindAllAttendanceController");
const UpdateAttendaceController_1 = require("../controllers/UpdateAttendaceController");
const DeleteAttendanceController_1 = require("../controllers//DeleteAttendanceController");
const FindByStudentAttendanceController_1 = require("../controllers/FindByStudentAttendanceController");
const attendanceRoutes = (0, express_1.Router)();
exports.attendanceRoutes = attendanceRoutes;
attendanceRoutes.post("/", CreateAttendaceController_1.createAttendanceController);
attendanceRoutes.get("/", FindAllAttendanceController_1.FindAllAttendanceController); // Aqui talvez seja para listar todos, revise depois.
attendanceRoutes.get("/:id", FindAllAttendanceController_1.FindAllAttendanceController);
attendanceRoutes.put("/:id", UpdateAttendaceController_1.updateAttendanceController);
attendanceRoutes.delete("/:id", DeleteAttendanceController_1.deleteAttendanceController);
attendanceRoutes.get("/student/:studentId/class/:classId", FindByStudentAttendanceController_1.findAttendanceByStudentController);
