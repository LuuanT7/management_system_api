"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListClassesUseCase = void 0;
const client_1 = require("../../../../shared/infra/prisma/client");
class ListClassesUseCase {
    async execute(filters) {
        const { teacherId, shift, subject } = filters;
        const classes = await client_1.prisma.class.findMany({
            where: {
                teacherId: teacherId || undefined,
                shift: shift || undefined,
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
        return classes;
    }
}
exports.ListClassesUseCase = ListClassesUseCase;
