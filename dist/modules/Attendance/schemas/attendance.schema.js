"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attendanceSchema = void 0;
const zod_1 = require("zod");
exports.attendanceSchema = zod_1.z.object({
    date: zod_1.z.coerce.date(),
    studentId: zod_1.z.string().uuid(),
    classId: zod_1.z.string().uuid(),
    present: zod_1.z.boolean(),
});
