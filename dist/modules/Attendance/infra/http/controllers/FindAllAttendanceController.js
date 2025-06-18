"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllAttendanceController = void 0;
const PrismaAttendanceRepository_1 = require("../../../repositories/ORM/PrismaAttendanceRepository");
const FindAllAttendanceUsecase_1 = require("../../../userCases/FindAllAttendanceUsecase");
const FindAllAttendanceController = async (req, res) => {
    try {
        const repository = new PrismaAttendanceRepository_1.PrismaAttendanceRepository();
        const usecase = new FindAllAttendanceUsecase_1.FindAllAttendanceUseCase(repository);
        const attendance = await usecase.execute(req.params.id);
        return res.json(attendance);
    }
    catch (err) {
        return res.status(404).json({ error: err.message });
    }
};
exports.FindAllAttendanceController = FindAllAttendanceController;
