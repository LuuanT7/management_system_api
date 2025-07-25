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
exports.CreateStudentUseCase = void 0;
const tsyringe_1 = require("tsyringe");
const AppError_1 = require("@shared/errors/AppError");
const zod_1 = require("zod");
const createStudentSchema = zod_1.z.object({
    userId: zod_1.z.string({
        required_error: "User ID is required",
        invalid_type_error: "User ID must be a string"
    }).uuid(),
    guardianId: zod_1.z.string({
        required_error: "Guardian ID is required",
        invalid_type_error: "Guardian ID must be a string"
    }).uuid()
});
let CreateStudentUseCase = class CreateStudentUseCase {
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }
    async execute(data) {
        try {
            const { userId, guardianId } = createStudentSchema.parse(data);
            const student = await this.studentRepository.create({ userId, guardianId });
            return student;
        }
        catch (error) {
            console.log(error);
            throw new AppError_1.AppError("Error creating student (CreateStudentUseCase)", 500);
        }
    }
};
exports.CreateStudentUseCase = CreateStudentUseCase;
exports.CreateStudentUseCase = CreateStudentUseCase = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("StudentRepository")),
    __metadata("design:paramtypes", [Object])
], CreateStudentUseCase);
