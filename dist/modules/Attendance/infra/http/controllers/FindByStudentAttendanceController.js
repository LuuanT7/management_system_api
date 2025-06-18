"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAttendanceByStudentController = void 0;
const PrismaAttendanceRepository_1 = require("../../../repositories/ORM/PrismaAttendanceRepository");
const FindByStudentAndClassUsecase_1 = require("../../../userCases/FindByStudentAndClassUsecase");
const findAttendanceByStudentController = async (req, res) => {
    try {
        const repository = new PrismaAttendanceRepository_1.PrismaAttendanceRepository();
        const usecase = new FindByStudentAndClassUsecase_1.FindByIdAttendanceUseCase(repository);
        const attendances = await usecase.execute(req.params.studentId);
        return res.json(attendances);
    }
    catch (err) {
        return res.status(404).json({ error: err.message });
    }
};
exports.findAttendanceByStudentController = findAttendanceByStudentController;
