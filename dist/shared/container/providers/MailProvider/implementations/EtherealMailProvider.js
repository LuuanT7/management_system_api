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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EtherealMailProvider = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const handlebars_1 = __importDefault(require("handlebars"));
const fs_1 = __importDefault(require("fs"));
const tsyringe_1 = require("tsyringe");
let EtherealMailProvider = class EtherealMailProvider {
    constructor() {
        nodemailer_1.default.createTestAccount().then(account => {
            const transporter = nodemailer_1.default.createTransport({
                host: account.smtp.host,
                port: account.smtp.port,
                secure: account.smtp.secure,
                auth: {
                    user: account.user,
                    pass: account.pass,
                },
            });
            this.client = transporter;
        }).catch(err => console.error("Failed to create test email account:", err));
    }
    async sendMail({ to, from, subject, templateData }) {
        try {
            const { template, variables } = templateData;
            const templateFileContent = fs_1.default.readFileSync(template, "utf-8");
            const templateParse = handlebars_1.default.compile(templateFileContent);
            const templateHTML = templateParse(variables);
            const message = await this.client.sendMail({
                to: `${to.name} <${to.email}>`,
                from: from ? `${from.name} <${from.email}>` : "Management System <noreply@managementsystem.com>",
                subject,
                html: templateHTML,
            });
            console.log("Message sent: %s", message.messageId);
            console.log("Preview URL: %s", nodemailer_1.default.getTestMessageUrl(message));
        }
        catch (error) {
            console.error("Error sending email:", error);
            throw new Error("Failed to send email");
        }
    }
};
exports.EtherealMailProvider = EtherealMailProvider;
exports.EtherealMailProvider = EtherealMailProvider = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [])
], EtherealMailProvider);
