"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaClassRepository = void 0;
const client_1 = require("../../../../shared/infra/prisma/client");
class PrismaClassRepository {
    async create(data) {
        const newClass = await client_1.prisma.class.create({
            data,
        });
        return newClass;
    }
    async listClasses({ teacherId, shift, subject }) {
        return client_1.prisma.class.findMany({
            where: {
                teacherId: teacherId ? teacherId : undefined,
                shift: shift ? shift : undefined,
                subject: subject
                    ? { contains: subject, mode: 'insensitive' }
                    : undefined,
            },
            include: {
                teacher: {
                    select: {
                        name: true,
                    },
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
}
exports.PrismaClassRepository = PrismaClassRepository;
