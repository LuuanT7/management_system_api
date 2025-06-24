"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaStudentRepository = void 0;
const prisma_1 = require("@shared/infra/database/prisma");
class PrismaStudentRepository {
    async create({ guardianId, userId, }) {
        const student = await prisma_1.prisma.student.create({
            data: {
                guardianId,
                userId
            }
        });
        return student;
    }
}
exports.PrismaStudentRepository = PrismaStudentRepository;
