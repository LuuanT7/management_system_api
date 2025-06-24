"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAttendanceController = void 0;
const DeleteAttendanceUsecase_1 = require("../../../userCases/DeleteAttendanceUsecase");
const PrismaAttendanceRepository_1 = require("../../../repositories/ORM/PrismaAttendanceRepository");
const deleteAttendanceController = async (req, res) => {
    try {
        const repository = new PrismaAttendanceRepository_1.PrismaAttendanceRepository();
        const usecase = new DeleteAttendanceUsecase_1.DeleteAttendenceUseCase(repository);
        const result = await usecase.execute(req.params.id);
        return res.json(result);
    }
    catch (err) {
        return res.status(404).json({ error: err.message });
    }
};
exports.deleteAttendanceController = deleteAttendanceController;
