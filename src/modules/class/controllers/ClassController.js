"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassController = void 0;
const ListClassesUseCase_1 = require("../useCases/services/ListClassesUseCase");
const class_transformer_1 = require("class-transformer");
const tsyringe_1 = require("tsyringe");
class ClassController {
    async list(request, response) {
        const { teacherId, shift, subject } = request.query;
        const listClassesUseCase = tsyringe_1.container.resolve(ListClassesUseCase_1.ListClassesUseCase); // Instância resolvida
        const classes = await listClassesUseCase.execute({
            teacherId: teacherId,
            shift: shift,
            subject: subject,
        });
        return response.json((0, class_transformer_1.instanceToPlain)(classes));
    }
}
exports.ClassController = ClassController;
