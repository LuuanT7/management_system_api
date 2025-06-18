"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaGuardianRepository = void 0;
const prisma_1 = require("@shared/infra/database/prisma");
class PrismaGuardianRepository {
    async create({ userId }) {
        const guardian = await prisma_1.prisma.guardian.create({
            data: {
                userId
            }
        });
        return guardian;
    }
}
exports.PrismaGuardianRepository = PrismaGuardianRepository;
