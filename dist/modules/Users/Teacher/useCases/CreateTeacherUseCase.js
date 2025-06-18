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
exports.CreateTeacherUseCase = void 0;
const tsyringe_1 = require("tsyringe");
const AppError_1 = require("@shared/errors/AppError");
const zod_1 = require("zod");
const createTeacherSchema = zod_1.z.object({
    userId: zod_1.z.string({
        required_error: "User ID is required",
        invalid_type_error: "User ID must be a string"
    }).uuid()
});
let CreateTeacherUseCase = class CreateTeacherUseCase {
    constructor(teacherRepository) {
        this.teacherRepository = teacherRepository;
    }
    async execute({ userId }) {
        try {
            createTeacherSchema.parse({ userId });
            const teacher = await this.teacherRepository.create({ userId });
            return teacher;
        }
        catch (error) {
            console.log(error);
            throw new AppError_1.AppError("Error creating teacher (CreateTeacherUseCase)", 500);
        }
    }
};
exports.CreateTeacherUseCase = CreateTeacherUseCase;
exports.CreateTeacherUseCase = CreateTeacherUseCase = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("TeacherRepository")),
    __metadata("design:paramtypes", [Object])
], CreateTeacherUseCase);
