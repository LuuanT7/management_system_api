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
exports.UpdateEnrollmentUseCase = void 0;
const tsyringe_1 = require("tsyringe");
const AppError_1 = require("@shared/errors/AppError");
const zod_1 = require("zod");
const updateEnrollmentSchema = zod_1.z.object({
    id: zod_1.z.string({
        required_error: "ID da matrícula é obrigatório",
        invalid_type_error: "ID da matrícula deve ser uma string"
    }).uuid("ID da matrícula inválido"),
    paymentStatus: zod_1.z.enum(["PENDING", "PAID", "OVERDUE"], {
        required_error: "Status do pagamento é obrigatório",
        invalid_type_error: "Status do pagamento inválido"
    }).optional(),
    paymentId: zod_1.z.string().uuid("ID do pagamento inválido").optional(),
    active: zod_1.z.boolean().optional()
}).required();
let UpdateEnrollmentUseCase = class UpdateEnrollmentUseCase {
    constructor(enrollmentRepository) {
        this.enrollmentRepository = enrollmentRepository;
    }
    async execute(data) {
        try {
            const validatedData = updateEnrollmentSchema.parse(data);
            const enrollment = await this.enrollmentRepository.findById(validatedData.id);
            if (!enrollment) {
                throw new AppError_1.AppError("Matrícula não encontrada", 404);
            }
            const updatedEnrollment = await this.enrollmentRepository.update(validatedData);
            return updatedEnrollment;
        }
        catch (error) {
            console.error(error);
            if (error instanceof AppError_1.AppError) {
                throw error;
            }
            throw new AppError_1.AppError("Erro ao atualizar matrícula (UpdateEnrollmentUseCase)", 500);
        }
    }
};
exports.UpdateEnrollmentUseCase = UpdateEnrollmentUseCase;
exports.UpdateEnrollmentUseCase = UpdateEnrollmentUseCase = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("EnrollmentRepository")),
    __metadata("design:paramtypes", [Object])
], UpdateEnrollmentUseCase);
