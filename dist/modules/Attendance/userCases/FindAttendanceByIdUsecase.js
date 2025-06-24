"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAttendanceByIdUsecase = void 0;
class FindAttendanceByIdUsecase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id) {
        const attendance = await this.repository.findById(id);
        if (!attendance) {
            throw new Error("Attendance not found.");
        }
        return attendance;
    }
}
exports.FindAttendanceByIdUsecase = FindAttendanceByIdUsecase;
