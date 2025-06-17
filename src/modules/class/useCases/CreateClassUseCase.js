"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClassUseCase = void 0;
const client_1 = require("../../../shared/infra/prisma/client");
// Função de validação fora da classe
function isValidTimeForShift(shift, startTime, endTime) {
    const parse = (time) => {
        const [hour, minute] = time.split(':').map(Number);
        return hour * 60 + minute;
    };
    const start = parse(startTime);
    const end = parse(endTime);
    if (start >= end)
        return false;
    if (shift === 'MORNING') {
        return start >= 420 && end <= 719; // 07:00 to 11:59
    }
    if (shift === 'AFTERNOON') {
        return start >= 720 && end <= 1079; // 12:00 to 17:59
    }
    return false;
}
class CreateClassUseCase {
    constructor(classRepository) {
        this.classRepository = classRepository;
    }
    async create(data) {
        const created = await client_1.prisma.class.create({
            data: {
                name: data.name,
                subject: data.subject,
                shift: data.shift,
                startTime: data.startTime,
                endTime: data.endTime,
                teacherId: data.teacherId,
            },
        });
        return {
            id: created.id,
            name: created.name,
            subject: created.subject,
            shift: created.shift,
            startTime: created.startTime,
            endTime: created.endTime,
            teacherId: created.teacherId,
            createdAt: created.createdAt,
        };
    }
}
exports.CreateClassUseCase = CreateClassUseCase;
