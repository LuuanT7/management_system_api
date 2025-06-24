"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaEnrollmentRepository = void 0;
const prisma_1 = require("@shared/infra/database/prisma");
class PrismaEnrollmentRepository {
    async findAll() {
        const enrollments = await prisma_1.prisma.enrollment.findMany();
        return enrollments;
    }
    async findById(id) {
        const enrollment = await prisma_1.prisma.enrollment.findUnique({ where: { id } });
        return enrollment;
    }
    async findByStudentId(studentId) {
        const enrollments = await prisma_1.prisma.enrollment.findMany({ where: { studentId } });
        return enrollments;
    }
    async findByClassId(classId) {
        const enrollments = await prisma_1.prisma.enrollment.findMany({ where: { classId } });
        return enrollments;
    }
    async create({ studentId, classId, guardianId, paymentStatus = "PENDING", paymentId, active = true }) {
        const enrollment = await prisma_1.prisma.enrollment.create({
            data: {
                studentId,
                classId,
                guardianId,
                paymentStatus,
                paymentId,
                active
            }
        });
        return enrollment;
    }
    async update({ id, paymentStatus, paymentId, active }) {
        const enrollment = await prisma_1.prisma.enrollment.update({
            where: { id },
            data: {
                paymentStatus,
                paymentId,
                active
            }
        });
        return enrollment;
    }
    async delete(id) {
        await prisma_1.prisma.enrollment.delete({
            where: { id }
        });
        return id;
    }
}
exports.PrismaEnrollmentRepository = PrismaEnrollmentRepository;
