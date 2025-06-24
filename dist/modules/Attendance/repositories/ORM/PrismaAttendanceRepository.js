"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaAttendanceRepository = exports.PrismaAttendanceRepository = void 0;
const prisma_1 = require("@shared/infra/database/prisma");
class PrismaAttendanceRepository {
    async findAll() {
        const attendance = await prisma_1.prisma.attendance.findMany();
        return attendance;
    }
    async findById(id) {
        const attendance = await prisma_1.prisma.attendance.findUnique({ where: { id } });
        return attendance;
    }
    async findByStudentId(studentId) {
        const attendance = await prisma_1.prisma.attendance.findMany({ where: { studentId } });
        return attendance;
    }
    async findByClassId(classId) {
        const attendance = await prisma_1.prisma.attendance.findMany({ where: { classId } });
        return attendance;
    }
    async create({ studentId, classId, date }) {
        const attendance = await prisma_1.prisma.attendance.create({
            data: {
                studentId,
                classId,
                date,
            }
        });
        return attendance;
    }
    async update({ id, present }) {
        const attendance = await prisma_1.prisma.attendance.update({
            where: { id },
            data: {
                present
            }
        });
        return attendance;
    }
    async delete(id) {
        await prisma_1.prisma.attendance.delete({
            where: { id }
        });
        return id;
    }
}
exports.PrismaAttendanceRepository = PrismaAttendanceRepository;
exports.prismaAttendanceRepository = new PrismaAttendanceRepository();
