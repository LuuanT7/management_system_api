"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIattendeceUseCase = void 0;
const tsyringe_1 = require("tsyringe");
const zod_1 = require("zod");
const AppError_1 = require("@shared/errors/AppError");
const createIattendenceSchema = zod_1.z.object({
    studentId: zod_1.z.string({
        required_error: "ID do estudante é obrigatório",
        invalid_type_error: "ID do estudante deve ser uma string"
    }).uuid("ID do estudante inválido"),
    classId: zod_1.z.string({
        required_error: "ID da turma é obrigatório",
        invalid_type_error: "ID da turma deve ser uma string"
    }).uuid("ID da turma inválido"),
    guardianId: zod_1.z.string({
        required_error: "ID do responsável é obrigatório",
        invalid_type_error: "ID do responsável deve ser uma string"
    }).uuid("ID do responsável inválido"),
}).required().strict();
let CreateIattendeceUseCase = class CreateIattendeceUseCase {
    constructor(IAttendanceRepository) {
        this.IAttendanceRepository = IAttendanceRepository;
    }
    async execute(data) {
        try {
            const { studentId, classId } = createIattendenceSchema.parse(data);
            const Attendance = await this.IAttendanceRepository.create({
                studentId,
                classId,
                present: true,
                date: undefined
            });
            return Attendance;
        }
        catch (error) {
            console.error(error);
            throw new AppError_1.AppError("Erro ao criar matrícula (CreateEnrollmentUseCase)", 500);
        }
    }
};
exports.CreateIattendeceUseCase = CreateIattendeceUseCase;
exports.CreateIattendeceUseCase = CreateIattendeceUseCase = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("IAttendanceRepository")),
    __metadata("design:paramtypes", [Object])
], CreateIattendeceUseCase);
