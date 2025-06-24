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
exports.DeleteAttendenceUseCase = void 0;
const tsyringe_1 = require("tsyringe");
const AppError_1 = require("@shared/errors/AppError");
const zod_1 = require("zod");
// Schema de validação do ID
const AttendenceSchema = zod_1.z.object({
    id: zod_1.z.string({
        required_error: "ID da matrícula é obrigatório",
        invalid_type_error: "ID da matrícula deve ser uma string"
    }).uuid("ID da matrícula inválido")
});
let DeleteAttendenceUseCase = class DeleteAttendenceUseCase {
    constructor(IAttendanceRepository) {
        this.IAttendanceRepository = IAttendanceRepository;
    }
    async execute(id) {
        try {
            // Fazendo a validação com Zod
            const { id: validatedId } = AttendenceSchema.parse({ id });
            // Busca se a matrícula existe
            const attendance = await this.IAttendanceRepository.findById(validatedId);
            if (!attendance) {
                throw new AppError_1.AppError("Matrícula não encontrada", 404);
            }
            // Deleta a matrícula
            await this.IAttendanceRepository.delete(validatedId);
            return "Matrícula deletada com sucesso";
        }
        catch (error) {
            console.error(error);
            if (error instanceof AppError_1.AppError) {
                throw error;
            }
            throw new AppError_1.AppError("Erro ao deletar matrícula (DeleteAttendanceUseCase)", 500);
        }
    }
};
exports.DeleteAttendenceUseCase = DeleteAttendenceUseCase;
exports.DeleteAttendenceUseCase = DeleteAttendenceUseCase = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("IAttendanceRepository")),
    __metadata("design:paramtypes", [Object])
], DeleteAttendenceUseCase);
