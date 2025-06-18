"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAttendanceController = void 0;
const UpdateAttendanceUsecase_1 = require("../../../userCases/UpdateAttendanceUsecase");
const PrismaAttendanceRepository_1 = require("../../../repositories/ORM/PrismaAttendanceRepository");
const updateAttendanceController = async (req, res) => {
    try {
        const repository = new PrismaAttendanceRepository_1.PrismaAttendanceRepository();
        const usecase = new UpdateAttendanceUsecase_1.UpdateAttendanceUseCase(repository);
        const updated = await usecase.execute(req.params.id, req.body);
        return res.json(updated);
    }
    catch (err) {
        return res.status(400).json({ error: err.message });
    }
};
exports.updateAttendanceController = updateAttendanceController;
