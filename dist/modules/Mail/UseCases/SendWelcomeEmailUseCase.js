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
exports.SendWelcomeEmailUseCase = void 0;
const tsyringe_1 = require("tsyringe");
const path_1 = require("path");
const AppError_1 = require("@shared/errors/AppError");
let SendWelcomeEmailUseCase = class SendWelcomeEmailUseCase {
    constructor(mailProvider) {
        this.mailProvider = mailProvider;
    }
    async execute({ name, email, password }) {
        try {
            const templatePath = (0, path_1.resolve)(__dirname, "..", "views", "emails", "welcome.hbs");
            await this.mailProvider.sendMail({
                to: {
                    name,
                    email
                },
                subject: "Bem-vindo ao Sistema de Gestão!",
                templateData: {
                    template: templatePath,
                    variables: {
                        name,
                        password,
                        link: process.env.APP_WEB_URL || "http://localhost:8080/v1"
                    }
                }
            });
        }
        catch (error) {
            throw new AppError_1.AppError("Erro ao enviar e-mail de boas-vindas.", 500);
        }
    }
};
exports.SendWelcomeEmailUseCase = SendWelcomeEmailUseCase;
exports.SendWelcomeEmailUseCase = SendWelcomeEmailUseCase = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("MailProvider")),
    __metadata("design:paramtypes", [Object])
], SendWelcomeEmailUseCase);
