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
exports.CreateUserUseCase = void 0;
const tsyringe_1 = require("tsyringe");
const zod_1 = require("zod");
// Schema de validação usando lib zods
const createUserSchema = zod_1.z.object({
    name: zod_1.z.string({ required_error: "Nome é obrigatório" })
        .min(3, "Nome deve ter no mínimo 3 caracteres")
        .max(100, "Nome deve ter no máximo 100 caracteres"),
    email: zod_1.z.string({ required_error: "Email é obrigatório" })
        .email("Email inválido")
        .min(5, "Email deve ter no mínimo 5 caracteres")
        .max(100, "Email deve ter no máximo 100 caracteres"),
    password: zod_1.z.string({ required_error: "Senha é obrigatória" })
        .min(6, "Senha deve ter no mínimo 6 caracteres")
        .max(100, "Senha deve ter no máximo 100 caracteres")
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Senha deve conter pelo menos uma letra maiúscula, uma minúscula e um número"),
    role: zod_1.z.enum(['ADMIN', 'GUARDIAN', 'STUDENT', 'TEACHER'], {
        invalid_type_error: "Tipo de função inválida",
        required_error: "Função é obrigatória",
    }),
}).required().strict();
let CreateUserUseCase = class CreateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(data) {
        try {
            // utilizando o schema de validação para validar o DATA
            const { name, email, password, role } = createUserSchema.parse(data);
            //passando os dados validados para a função de criar
            const user = await this.userRepository.create({
                name,
                email,
                password,
                role,
                cpf: data.cpf,
                rg: data.rg,
                gender: data.gender,
                phone: data.phone,
                birthDate: data.birthDate
            });
            return user;
        }
        catch (error) {
            console.error(error);
            throw new Error("Erro ao criar usuário (CreateUserUseCase)");
        }
    }
};
exports.CreateUserUseCase = CreateUserUseCase;
exports.CreateUserUseCase = CreateUserUseCase = __decorate([
    (0, tsyringe_1.injectable)()
    //classe construtura, estudar classe contrutoria e injeção de dependencia
    // estudar classe e arquitetura solids
    ,
    __param(0, (0, tsyringe_1.inject)("UserRepository")),
    __metadata("design:paramtypes", [Object])
], CreateUserUseCase);
