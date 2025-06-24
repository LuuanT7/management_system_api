"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAttendanceController = void 0;
const CreateAttendanceUsecases_1 = require("../../../userCases/CreateAttendanceUsecases");
const PrismaAttendanceRepository_1 = require("../../../repositories/ORM/PrismaAttendanceRepository");
const repository = new PrismaAttendanceRepository_1.PrismaAttendanceRepository();
const createAttendanceController = async (req, res) => {
    try {
        const usecase = new CreateAttendanceUsecases_1.CreateIattendeceUseCase(repository);
        const attendance = await usecase.execute(req.body);
        return res.status(201).json(attendance);
    }
    catch (err) {
        return res.status(400).json({ error: err.message });
    }
};
exports.createAttendanceController = createAttendanceController;
